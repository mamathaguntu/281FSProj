import React, { Component } from 'react'

import {Form, Card, Col, Accordion, Button} from 'react-bootstrap'
import Table from '@material-ui/core/Table';
import { NavLink } from 'react-router-dom';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import DatabaseAPI from './DatabaseAPI'
import config from './config.json'
import { Amplify, Auth } from "aws-amplify";
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import S3ServiceAPI from './S3ServiceAPI'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

Amplify.configure(config)
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

export class DisplayMyFiles extends Component {
  

    constructor(props) {
        super(props);
        
        this.state = {
          myFiles: [],
          emailid:'',
          currentDate: Date().toLocaleString(),
          username: '',
          fileUpdate: true
        };
        this.getMyFiles =  this.getMyFiles.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.logOut = this.logOut.bind(this)
        this.downloadFile = this.downloadFile.bind(this)
        this.deleteFile= this.deleteFile.bind(this);
      }
      
      componentDidMount() {
        this.getMyFiles();
      }
     
      async getMyFiles() {
        const currentUser = await Auth.currentAuthenticatedUser()
        const userDetails = await Auth.userAttributes(currentUser)
        
        const currentUserMail = await userDetails.find(userAttribute => userAttribute.Name === "email").getValue()
        const response1 = await S3ServiceAPI.listMyFileDetails(currentUserMail);
        this.setState({emailid: currentUserMail})
        const response2 = await DatabaseAPI.getUser(currentUserMail);
        const usernameTmp = `${response2.firstName} ${response2.lastName}`;
        this.setState({username: usernameTmp})
      
        const json = await response1;
        this.setState({ myFiles: json });
      }

      async handleUpload (ev) {
        
        ev.preventDefault();
        let file = this.uploadInput.files[0];
        if (file.size > 10000000)
            alert('Please upload file of size less than 10 MB')
        else{
            const email = this.state.emailid
            var data = new FormData();
            const fileName = `${email}_${file.name}`;
            data.append('file', file, fileName);
            const response = await S3ServiceAPI.uploadFile(data);
            await this.getMyFiles();
            alert('File uploaded successfully')
          }
        }

        async handleModUpload(event, fileName){
              alert('Upload file with same name to update the file, or new file will be created!')
          }

        

        async logOut (e) {
          await Auth.signOut()
          alert("Logged out successfully")
          
        }

        async deleteFile(event, fileName){
          const response = await S3ServiceAPI.deleteFile(fileName);
          this.getMyFiles();
        }

        async downloadFile(event, fileName){
          const response = await S3ServiceAPI.deleteFile(fileName);
          this.getMyFiles();
        }

        
    render() {
          const myFiles = this.state.myFiles
          const username = this.state.emailid
          return (  
            <>
            <br/>
           
            <div className="bg-dark text-white">
             <h5> <AccountCircleIcon />{this.state.username}</h5>
              <NavLink to={"/"} onClick={(e) => this.logOut(e)}>
                <Button align = "right">Logout</Button>
              </NavLink>
            </div>
            <br/>
            <hr/>
            <Accordion>
            <Card>
              <Card.Header className="bg-dark text-white">
                <Accordion.Toggle as={Button} eventKey="0">
                  Upload File
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                <Form classname = "bg-dark text-white">
                <Form.Group as={Col} md = {5}>
                <div>
                  <input type="file" id="input" multiple onChange={this.handleChange} ref={(ref) => { this.uploadInput = ref; }}/>                    
                  </div>
                  </Form.Group>
                  <Form.Group as={Col} md = {5}>
                    <button type = "submit" onClick = {this.handleUpload}>Submit</button>
                  </Form.Group>
            <hr/>
          </Form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            </Accordion>
           <hr/>
            <TableContainer component={Paper}>
            <Table  aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>File Name</StyledTableCell>
                  <StyledTableCell align="right">Size(KB)</StyledTableCell>
                  <StyledTableCell align="right">Modified Time</StyledTableCell>
                  <StyledTableCell align="right">Download </StyledTableCell>
                  <StyledTableCell align="right">Delete </StyledTableCell>
                  <StyledTableCell align="right">Edit </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {myFiles.map((row) => (
                  <StyledTableRow key={row.key}>
                    <StyledTableCell component="th" scope="row">{row.key}</StyledTableCell>
                    <StyledTableCell align="right">{(row.size* 0.001).toFixed(0)}</StyledTableCell>
                    <StyledTableCell align="right">{new Date(row.lastModified).toLocaleString()}</StyledTableCell>
                    <StyledTableCell align="right">
                    <a href={"https://do5jndq77x4mj.cloudfront.net/"+ row.key}>Download</a>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <button type = "submit" onClick={(event) => this.deleteFile(event, row.key)}>Delete</button>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <button type = "submit" onClick={(event) => this.handleModUpload(event, row.key)}>Modify</button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
        )
    }
}
// DisplayMyFiles.contextType = AuthContext
export default DisplayMyFiles

