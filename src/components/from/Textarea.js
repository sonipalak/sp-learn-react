import React, { useState } from "react";


function Textarea(props) {

    const [text, setText] = useState(`Enter Your Massage`);

    const heandleUpClick = () => {
        //console.log("Update on Click" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const heandleonChange = (event) => {
        //console.log("Update On Change");
        setText(event.target.value);
    }



    return (
        <div className="form-field">
            <label className='form-field__label'>{props.label}</label>
            <div className='form-field__textarea-wrap'>
                <textarea id="myBox" onChange={heandleonChange} value={text} rows={props.rows}> </textarea>
                <p>Word Count: {text.split(" ").length}, Character Count: {text.length}</p>
            </div>
            <button onClick={heandleUpClick}>Update Text</button>
        </div>
    )
}

export default Textarea;

Textarea.defaultProps = {
    rows: 5,
}