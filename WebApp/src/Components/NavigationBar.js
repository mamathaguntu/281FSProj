import React, { Component } from 'react'

import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import CloudIcon from '@material-ui/icons/Cloud';

class NavigationBar extends Component {
    render() {
        return (
            
           <Navbar bg = 'dark' variant = 'dark'>
                <Link to = {""} className="navbar-brand"> <CloudIcon/>File Storage</Link>
            </Navbar>
        )
    }
}

export default NavigationBar
