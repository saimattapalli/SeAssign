import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Add from './Add';
import Api from './Api';
import Bio from './Bio';


export default class NavbarComp extends Component {
    
    render() {
        return (
            <Router>
                <div>

                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand href="#">Elite</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/bio">Bio</Nav.Link>
                                <Nav.Link as={Link} to="/add">Add</Nav.Link>
                                <Nav.Link as={Link} to="/api">Api</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route path="/add"  >
                            <Add />
                        </Route>
                        <Route path="/api" >
                            <Api />
                        </Route>
                        <Route path="/bio" >
                            <Bio />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
