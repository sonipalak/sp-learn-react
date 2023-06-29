import React from "react";
import Input from './from/Input';
import Textarea from "./from/Textarea";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About(props) {
    return (
        <div className={`App text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={6} xs={12} className="my-5">
                        <h1 className="title is-1">{props.title}</h1>
                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis consequat nulla ac ex consequat, in efficitur arcu congue. Nam fermentum commodo egestas.</p>
                    </Col>
                </Row>
            </Container>
            
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={6} xs={12}>
                        <div className="form-sample">
                            {/*<Input label="First Name" type="text" placeholder="Enter First Name" />
                            <Input label="Last Name" type="text" placeholder="Enter Last Name" />
                            <Input label="Email" type="email" placeholder="Enter Email" />
                            <Input label="Phone" type="phone" placeholder="Enter Phone" /> */}
                            <Textarea showAlert={props.showAlert} label="Comment" rows="5" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


