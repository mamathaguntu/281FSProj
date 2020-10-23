import React, { Component } from 'react'
import {Button, Jumbotron, Nav} from 'react-bootstrap'
import { Route, Router, Switch, Link} from 'react-router-dom';
import LoginPage from './LoginPage'

export class WelcomePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            error: false
        }

        this.onChange = this.onChange.bind(this);
        
    }
    onChange = (props) => {
        this.setState ={
            error: false
        }
        const {history} = this.props
        history.push('/login')
    }
    render() {
        return (
            
            <div align = "center" >
                <Jumbotron className = 'bg-dark text-white'>
                    <h1>Welcome to File Management</h1>
                    <h7>
                    You can upload, edit, store, download and delete the files whenever required!
                    </h7>
                </Jumbotron>
                <Button align = 'center' variant="primary" onClick={this.onChange}>
                Get Started!
                </Button>
            </div>
      
        )
    }

}

export default WelcomePage
