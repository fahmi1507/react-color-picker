import React, { useEffect, useState } from 'react'
import { generateColor } from '../../helper/generateColor'
import './color-picker.styles.css'


const ColorPicker = () => {
    const [arrayOfColor, setArrayOfColor] = useState([])
    const [selectedColor, setSelectedColor] = useState({})

    useEffect(() => {
        setArrayOfColor(generateColor(8))
    }, [])

    const handleClick = (color, id) => {
        setSelectedColor({
            id,
            color,
        })
    }

    return (
        <div >
            <div className="color-container">
            {
                arrayOfColor.length !== 0 && arrayOfColor.map((e, idx) => {
                    return (
                                <div className='big-square' key={idx}>
                                {
                                    e.map(e => {
                                        const { id, color } = e;
                                        return (<div>
                                            {
                                                selectedColor.id === id && (
                                                    <div className='hex-code'>
                                                        RGB{selectedColor.color}
                                                    </div>
                                                )
                                            }
                                            <div
                                                onClick={() => handleClick(color, id)}
                                                key={e.id}
                                                className={`rectangle ${selectedColor.id === id ? 'active' : ''}`}
                                                style={{ backgroundColor: `rgba${color}`}}>
                                            </div>

                                        </div>
                                        )
                                    })
                                }
                                </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default ColorPicker