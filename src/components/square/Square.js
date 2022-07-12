import React from 'react'
import './square.styles.css'

const Square = ({ selectedColor, id, color, handleClick }) => {
    return (
        <>
            {
                selectedColor.id === id && (
                    <div className='hex-code'>
                        RGB{selectedColor.color}
                    </div>
                )
            }
            <div
                onClick={() => handleClick(color, id)}
                className={`rectangle ${selectedColor.id === id ? 'active' : ''}`}
                style={{ backgroundColor: `rgba${color}`}}>
            </div>

        </>
    )
}

export default Square