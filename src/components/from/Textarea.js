import React, { useState } from "react";


function Textarea(props) {

    const [text, setText] = useState(``);

    const heandleonChange = (event) => {
        //console.log("Update On Change");
        setText(event.target.value);
    }

    const heandleUpClick = () => {
        //console.log("Update on Click" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const heandleLoClick = () => {
        let newText  = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Loercase!", "success");
    }
    const heandleClear = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Clear Text", "success");
    }

    return (
        <div className="form-field">
            <label className='form-field__label'>{props.label}</label>
            <div className='form-field__textarea-wrap'>
                <textarea id="myBox" onChange={heandleonChange} value={text} rows={props.rows} placeholder={props.placeholder} />
                <p>Word Count: {text.split(" ").length}, Character Count: {text.length}</p>
            </div>
            <div className="button-list">
                <button className="button filled" onClick={heandleUpClick}>Update Upper Case</button>
                <button className="button filled" onClick={heandleLoClick}>Update Lower Case</button>
                <button className="button filled" onClick={heandleClear}>Clear Text</button>
            </div>
            <br />
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here." }</p>
        </div>
    )
}

export default Textarea;

Textarea.defaultProps = {
    rows: 5,
    placeholder: 'Enter Your Massage'
}