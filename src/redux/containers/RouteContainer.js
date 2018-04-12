import React from 'react';
import {Route, Link} from 'react-router-dom'
import HomeContainer from './HomeContainer'
import About from '../../components/About'
import ShallowWorld from "../../components/ShallowWorld";
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const RouteContainer = () => (
    <div className="row">
        <header>
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Home</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            <Link to="/about-us">About</Link>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            <Link to="/shallow-world">Shallow</Link>
                        </NavItem>

                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            Link Right
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link Right
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>

        <main>
            <Route exact path="/" component={HomeContainer}/>
            <Route exact path="/about-us" component={About}/>
            <Route exact path="/shallow-world" component={ShallowWorld}/>
        </main>
    </div>
)

export default RouteContainer;