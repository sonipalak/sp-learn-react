import React, { useState } from 'react'
import '../assets/scss/custom/button.scss';

export default function Contact() {

    const [setMode, setChangeMode] = useState({
        color: 'black',
        backgroundColor: 'white',
        borderColor: 'white',
        height: '100vh'
    })
    const [btnText, setBtnText] = useState("Enable Light Mode")

    const toggleStyle = () => {
        if (setMode.color === 'white') {
            setChangeMode({
                color: 'black',
                backgroundColor: 'white',
                borderColor: 'black',
                height: '100vh'
            })
            setBtnText("Enable Dark Mode")
        }
        else {
            setChangeMode({
                color: 'white',
                backgroundColor: 'black',
                borderColor: 'white',
                height: '100vh'
            })
            setBtnText("Enable Light Mode")
        }

    }

    return (
        <div style={setMode}>
            <div>
                <h1 className="title">This is the Contact Page</h1>
                <h2>Recently recommended carers</h2>
                <div className='carers-card'>
                    <p>As usual, mum has been well looked after by Petronela who is always patient, caring, and very very charming. Cannot recommend her enough. Very happy daughter.”</p>
                </div>
            </div>
            <br />
            <button className="button filled" onClick={toggleStyle}>{btnText}</button>
        </div>
    )
}
