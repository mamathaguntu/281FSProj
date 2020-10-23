import React, { Component } from 'react'

import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class NavigationBar extends Component {
    render() {
        return (
            
           <Navbar bg = 'dark' variant = 'dark'>
                <Link to = {""} className="navbar-brand">File Storage</Link>
                <Nav className="mr-auto">
                <Link to={"login"} className="nav-link">Login</Link>
                </Nav>
            </Navbar>
        )
    }
}

export default NavigationBar
