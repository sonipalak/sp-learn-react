import React from "react";
import PropsType from 'prop-types';
import '../../assets/scss/from.scss';


function Input(props) {
    return (
        <div className="form-field">
            <label className="form-field__label">{props.label}</label>
            <div className="form-field__input-wrap">
                <input type={props.type} placeholder={props.placeholder} />
            </div>
        </div>
    );
}

export default Input;

Input.PropsType ={
    label: PropsType.string.isRequired,
    type: PropsType.string.isRequired,
    placeholder: PropsType.string.isRequired
}

Input.defaultProps ={
    label: 'First Name',
    type: 'text',
    placeholder: 'Enter First Name'
}
