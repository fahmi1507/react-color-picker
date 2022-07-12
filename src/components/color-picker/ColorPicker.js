import React, { useEffect, useState } from 'react'
import { generateColor } from '../../helper/generateColor'
import Square from '../square/Square'
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
                arrayOfColor.length !== 0 && arrayOfColor.map((item, idx) => {
                    return (
                                <div className='big-square' key={idx}>
                                {
                                    item.map(square => {
                                        const { id, color } = square;
                                        return (
                                            <Square
                                                selectedColor={selectedColor}
                                                id={id}
                                                color={color}
                                                handleClick={handleClick}
                                                key={id}
                                            />
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