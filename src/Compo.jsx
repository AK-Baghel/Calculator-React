import React from 'react'
import { useState } from 'react'
import './Compo.css'

export const Compo = () => {
    const [input, setInput] = useState("");
    const calc = (e) => {
        if (e.target.value === 'AC')
            setInput("");

        else if (e.target.value === 'DEL')
            setInput(input.substring(0, input.length - 1))
        else if (e.target.value === '=')
            setInput(`${eval(input)}`);

        else {
            setInput(input.concat(e.target.value));
        }
    }

    return (
        <div className="cont">
            <div className="calculator">
                <input className='input' type="text" placeholder='0' value={input} />
                <div className="line1">
                    <input type="button" value="AC" className='button opt' onClick={calc}></input>
                    <input type="button" value="DEL" className='button opt' onClick={calc}></input>
                    <input type="button" value="/" className='button opt' onClick={calc}></input>
                    <input type="button" value="*" className='button opt' onClick={calc}></input>
                </div>
                <div className="line2">
                    <input type="button" value="7" onClick={calc} className="button" />
                    <input type="button" value="8" onClick={calc} className="button" />
                    <input type="button" value="9" onClick={calc} className="button" />
                    <input type="button" value="+" onClick={calc} className='button opt' />
                </div>
                <div className="line3">
                    <input type="button" value="4" onClick={calc} className="button" />
                    <input type="button" value="5" onClick={calc} className="button" />
                    <input type="button" value="6" onClick={calc} className="button" />
                    <input type="button" value="-" onClick={calc} className='button opt' />
                </div>
                <div className="line4">
                    <input type="button" value="1" onClick={calc} className="button" />
                    <input type="button" value="2" onClick={calc} className="button" />
                    <input type="button" value="3" onClick={calc} className="button" />
                    <input type="button" value="." onClick={calc} className='button opt' />
                </div>
                <div className="line5">
                    <input type="button" value="0" onClick={calc} className='button down' />
                    <input type="button" value="=" onClick={calc} className='button opt' />
                </div>
                <div className="social">
                    <a href="https://github.com/AK-Baghel"><i className="fa-brands fa-github"></i></a>
                    <span>AKBagheL❤️</span>
                    <a href="https://www.linkedin.com/in/ankit-kumar-2119781b4"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    )
}
