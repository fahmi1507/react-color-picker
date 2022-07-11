import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Photo from '../photos/Photo'
import './photos.styles.css'
import ReactPaginate from 'react-paginate'
import BarLoader from "react-spinners/BarLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#23adad",
};

const Photos = () => {
    const [page] = useState(1)
    const [data, setData] = useState([])
    const [displayList, setDisplayList] = useState(false)
    const [pageCount] = useState(3);
    const [isLoading, setIsLoading] = useState(false)
    const [itemOffset, setItemOffset] = useState(0);


    useEffect(() => {
        const fetchData = async (page = 1) => {
            const url = `https://picsum.photos/v2/list?page=${page}&limit=10`

            setIsLoading(true)
            try {
                const res = await fetch(url)
                const data = await res.json()
                setData(data)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
                setIsLoading(false)
            }
        }

        fetchData(itemOffset+1)

        return () => {
            setData([])
        }
    }, [page, itemOffset])
    

    const handlePageClick = (event) => {
        const newOffset = event.selected
        setItemOffset(newOffset);
    };

    return (
        <div className={`pagination-container ${displayList ? 'width-list' : ''}`}>
            <button
                className={`view-type-btn ${displayList ? 'btn-list' : ''}`} 
                onClick={() => setDisplayList(!displayList)}
            >
                <span>
                    {
                        !displayList ? 'List' : 'Grid'
                    }
                </span>
            </button>
            {/* loading animation when fetching data */}
            {
                isLoading && <div className="loading">
                    <BarLoader color={'#23adad'} loading={isLoading} cssOverride={override} size={50} />
                </div>
            }
            {
                !isLoading && (
                    <div className={`photo-container ${displayList ? 'list' : ''}`}>
                        <Photo data={data} displayList={displayList} />
                    </div>
                )
            }
            <div className="pagination">
                <ReactPaginate
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    )
}

export default Photos