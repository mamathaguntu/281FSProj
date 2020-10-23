import React from 'react';

import NavigationBar from './Components/NavigationBar';
import {Container, Row, Col, Jumbotron} from 'react-bootstrap'
import Footer  from "./Components/Footer";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import WelcomePage from './Components/WelcomePage';
import RegistrationPage from './Components/RegistrationPage';
import AdminSrcPage from './Components/AdminSrcPage';
import DisplayMyFiles from './Components/DisplayMyFiles'
import DisplayUserDetails from './Components/DisplayUserDetails';
import LoginP from './Components/LoginP'

function App() {
  const marginTop = {
    marginTop: '40px'
  }

  return (
   <Router>
    <NavigationBar/>
    <Container>
      <Row>
        <Col lg = {12} style = {marginTop}>
        <Switch>
          <Route path="/" exact component={WelcomePage} />
          <Route path="/login" exact component={LoginP} />
          <Route path="/register" exact component={RegistrationPage} />
          <Route path="/adminPage" exact component={AdminSrcPage} />
          <Route path="/displayMyFiles" exact component={DisplayMyFiles} />
          <Route path="/users" exact component={DisplayUserDetails} />
         
        </Switch>
        </Col>
      </Row>
    </Container>
    <testDataPage/>
    <Footer />
    </Router>
    
  );
}

export default App;
