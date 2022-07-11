import React from 'react'
import './photo.styles.css'

const Photo = ({ data , displayList }) => {
    return (
        data && data.map(item => {
            if (displayList) {
                return (
                    <div key={item.id} className='img-container-list'>
                        <img src={item.download_url} alt='img'/>
                        <div className='img-info'>
                            <span>Author</span>
                            <h4>{item.author}</h4>
                        </div>
                    </div>
                )
            }
            return (
                <div key={item.id} className='img-container'>
                    <img src={item.download_url} alt='img' width={293} height={293} />
                </div>
            )
        })    
    )
}

export default Photo;