import React from 'react'
import { useState } from 'react'
import { capitalize, convert } from '../../helper/conversion'
import './number-to-words.styles.css'

const NumberToWords = () => {
    const [input, setInput] = useState(0);

    return (
        <div>
            <div className="number-2-words-container">
       
                <input type="number" min={'0'} value={input} onChange={(e) => setInput(e.target.value)} />

                <div className='words-container'>

                    <span>{capitalize(convert(input))}</span>

                </div>

            </div>
        </div>
    )
}

export default NumberToWords

