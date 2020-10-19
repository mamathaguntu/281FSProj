import React from 'react';

import NavigationBar from './Components/NavigationBar';
import {Container, Row, Col, Jumbotron} from 'react-bootstrap'
import Footer  from "./Components/Footer";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LoginPage from './Components/LoginPage'
import WelcomePage from './Components/WelcomePage';
import RegistrationPage from './Components/RegistrationPage';
import AdminSrcPage from './Components/AdminSrcPage';

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
          <Route path="/login" exact component={LoginPage} />
          <Route path="/register" exact component={RegistrationPage} />
          <Route path="/adminPage" exact component={AdminSrcPage} />
        </Switch>
        </Col>
      </Row>
    </Container>
    <Footer />
    </Router>
    
  );
}

export default App;
