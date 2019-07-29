import React from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
function Header(){
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">QT-Show</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Movies</Nav.Link>
                    <NavDropdown title="Movies Categories" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Horror</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Thriller</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Devotional</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Family</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Drama</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Comedy</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Love</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Suspence</NavDropdown.Item>
                        
                        <NavDropdown.Item href="#action/3.4">SciFi</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Video Songs" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Solo</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Item Songs</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Melody</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Tragedy</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Mass Beat</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Folk</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Rap</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Duets</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Devotiional</NavDropdown.Item>
                        
                        <NavDropdown.Item href="#action/3.4">SciFi</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav>
                        <Nav.Link href="#home">Login</Nav.Link>
                        <Nav.Link href="#link">Register</Nav.Link>
                        <NavDropdown title="Language" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Telugu</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Hindi</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Tamil</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Malyalam</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Kannada</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Bengali</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Bhojpuri</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">punjabi</NavDropdown.Item>
                        
                        <NavDropdown.Item href="#action/3.4">SciFi</NavDropdown.Item>
                    </NavDropdown>
                   
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;