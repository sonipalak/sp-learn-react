import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import PropsType from 'prop-types';
//import Link from 'react-router-dom';

function Navigation(props) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary"  bg={`${props.mode}`} data-bs-theme={`${props.mode}`}>
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                        
                    <Form className={`d-flex text-${props.mode === 'light'?'dark':'light'}`}>
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label="Check this switch"
                        onClick={props.toggleMode}
                    />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;