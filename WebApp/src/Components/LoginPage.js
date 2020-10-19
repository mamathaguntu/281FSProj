import React, { Component } from 'react'
import {Card, Form, Button, Col, FormGroup} from 'react-bootstrap'
import {Link, ReactDOM} from 'react-router-dom'
import RegistrationPage from './RegistrationPage'
import {GoogleLogin} from 'react-google-login';
import AdminSrcPage from './AdminSrcPage';


export class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            agreeTerms: false,
            error: false,
          };
          this.onSubmit = this.onSubmit.bind(this);
          
          this.handleUnameChange = this.handleUnameChange.bind(this);
          this.handlePwdChange = this.handlePwdChange.bind(this);
    }
    

    responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj)
    }
    
    onSubmit(e) {
        
        this.setState({ error: false });
        const {history} = this.props;

        if (!(this.state.username === 'admin@gmail.com' && this.state.password === 'admin')) {
            alert ('Incorrect password, Please try again!')
            return this.setState({ error: true });
          }
        else if (this.state.username === 'admin@gmail.com' && this.state.password === 'admin'){
            history.push('/adminPage');
        }
        
        e.preventDefault();
      }
    
      handleUnameChange =(e) => {
        this.setState({ 
            username: e.target.value
         });
      }
    //   handleChange = (e) => {
    //       this.setState = {
    //           agreeTerms: e.target.value
    //       }
    //   }

      
      handlePwdChange = (e) => {
        this.setState({ 
            password: e.target.value
         });
      }

    render() {
        return (
            <Card>
            <Form>
                <GoogleLogin
                    clientId="270820257360-nsqo8lpi97bnnpd5bq3ea3bnjdbph74v.apps.googleusercontent.com"
                    buttonText="Google Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                /></Form>
                <Form>
                <Card.Body>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.handleUnameChange}/>
                        <Form.Text className="text-muted">
                            Your email will not be shared with anyone else!!
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label name='Password'>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.handlePwdChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I agree to the terms and conditions*"/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.onSubmit} >
                        Login
                    </Button>
                    <FormGroup>
                        <Form.Label column lg={2}>
                        New user? 
                        <Link to={"register"} className="nav-link">Sign up!</Link>
                        </Form.Label>
                    </FormGroup>
                    </Card.Body>
                    </Form>
            </Card>
        )
    }
}

export default LoginPage
