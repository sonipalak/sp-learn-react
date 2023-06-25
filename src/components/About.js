import React from "react";
import Input from './from/Input';
import Textarea from "./from/Textarea";

function About(props) {
    return (
        <div className="App">
            <h1 className="title is-1">{props.title}</h1>
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis consequat nulla ac ex consequat, in efficitur arcu congue. Nam fermentum commodo egestas.</p>
            <div className="form-sample">
                <Input label="First Name" type="text" placeholder="Enter First Name" />
                <Input label="Last Name" type="text" placeholder="Enter Last Name" />
                <Input label="Email" type="email" placeholder="Enter Email" />
                <Input label="Phone" type="phone" placeholder="Enter Phone" />
                <Textarea label="Comment" rows="5" />
            </div>
        </div>
    );
}

export default About;
