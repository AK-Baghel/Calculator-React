import React from 'react'
import { useState } from 'react'
import './Compo.css'

export const Compo = () => {
    const [input, setInput] = useState("");
    const calc=(e)=>{
        setInput(input.concat(e.value))
        console.log(input);
    }

    return (
        <div className="cont">
            <div className="calculator">
                <input className='input' type="text" placeholder='0' value={input} />
                <div className="line1">
                    <button className='opt' onClick={calc}>AC</button>
                    <button className='opt'>DEL</button>
                    <button className='opt'>/</button>
                    <button className='opt'>*</button>
                </div>
                <div className="line2">
                    <button onClick={calc}>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className='opt'>+</button>
                </div>
                <div className="line3">
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button className='opt'>-</button>
                </div>
                <div className="line4">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button className='opt'>.</button>
                </div>
                <div className="line5">
                    <button className='down'>0</button>
                    <button className='opt'>=</button>
                </div>
                <div className="social">
                    <a href="/"><i className="fa-brands fa-github"></i></a>
                    <span>AKBagheL</span>
                    <a href="/"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>

        </div>
    )
}
