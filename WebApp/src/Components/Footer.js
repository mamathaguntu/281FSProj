import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import {Navbar, Nav, Col} from 'react-bootstrap'

export class Footer extends Component {
    render() {
        let fullYear = new Date().getFullYear();
        return (
            <Navbar fixed = "bottom" bg = "dark" variant = "dark">
                <Container>
                    <Col lg = {12} className = "text-center text-muted">
                        <div>{fullYear}, All Rights Reserved </div>
                    </Col>
                </Container>
            </Navbar>
        )
    }
}

export default Footer
