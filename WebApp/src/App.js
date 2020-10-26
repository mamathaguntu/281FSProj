import React from 'react';

import NavigationBar from './Components/NavigationBar';
import {Container, Row, Col, Jumbotron} from 'react-bootstrap'
import Footer  from "./Components/Footer";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import WelcomePage from './Components/WelcomePage';
import RegistrationPage from './Components/RegistrationPage';
import AdminSrcPage from './Components/AdminSrcPage';
import DisplayAllFiles from './Components/DisplayAllFiles'
import DisplayUserDetails from './Components/DisplayUserDetails';
import LoginP from './Components/LoginP'
import DisplayMyFiles from './Components/DisplayMyFiles'
import amplify from 'aws-amplify'
import config from './Components/config.json'
import userPage from './Components/userPage';

import ConfirmUser from './Components/ConfirmUser';

amplify.configure({
  Auth: {
    mandatorySignId: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  }
})

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
          <Route path="/displayAllFiles" exact component={DisplayAllFiles} />
         
          
          <Route path="/displayMyFiles" exact component={DisplayMyFiles} />
          <Route path="/users" exact component={DisplayUserDetails} />
          <Route path="/userPage" exact component={userPage}/>
          <Route path="/confirmUser/:email" exact component={ConfirmUser}/>
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
