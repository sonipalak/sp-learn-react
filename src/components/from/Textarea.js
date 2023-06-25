import React, { useState } from "react";


function Textarea(props) {

    const [text, setText] = useState(`Enter Your Massage`);
    const [characterCount, setcharacterCount] = useState(0);

    const heandleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const heandleonChange = (event) => {
        setText(event.target.value);
        setcharacterCount(event.target.value.length);
    }



    return (
        <div className="form-field">
            <label className='form-field__label'>{props.label}</label>
            <div className='form-field__textarea-wrap'>
                <textarea id="myBox" onChange={heandleonChange} value={text} rows={props.rows}> </textarea>
                <p>Character Count: {characterCount}</p>
            </div>
            <button onClick={heandleUpClick}>Update Text</button>
        </div>
    )
}

export default Textarea;

Textarea.defaultProps = {
    rows: 5,
}