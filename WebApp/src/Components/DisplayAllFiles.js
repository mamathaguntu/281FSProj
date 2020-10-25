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


import config from './config.json'
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import S3ServiceAPI from './S3ServiceAPI'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

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

export class DisplayAllFiles extends Component {
  

    constructor(props) {
        super(props);
        
        this.state = {
          myFiles: []
        };
        this.getAllFiles =  this.getAllFiles.bind(this);
        this.deleteFile= this.deleteFile.bind(this);
      }
      
      componentDidMount() {
        this.getAllFiles();
      }
     
      async getAllFiles() {
        const response1 = await S3ServiceAPI.listFileDetails();
        const json = await response1;
        this.setState({ myFiles: json });
      }

      async deleteFile(event, fileName){
        const response = await S3ServiceAPI.deleteFile(fileName);
        this.getAllFiles();
      }

    render() {
          const myFiles = this.state.myFiles
          return (  
            <>
            <br/>
            <div className="bg-dark text-white">
              <NavLink to={"/"}>
                <Button align = "right">Logout</Button>
              </NavLink>
            </div>
            <br/>
            <hr/>
            <TableContainer component={Paper}>
            <Table  aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>File Name</StyledTableCell>
                  <StyledTableCell align="right">Created Time</StyledTableCell>
                  <StyledTableCell align="right">Size(Byte)</StyledTableCell>
                  <StyledTableCell align="right">Modified Time</StyledTableCell>
                  <StyledTableCell align="right">Delete </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {myFiles.map((row) => (
                  <StyledTableRow key={row.key}>
                    <StyledTableCell component="th" scope="row">{row.key}</StyledTableCell>
                    <StyledTableCell align="right">{row.lastModified}</StyledTableCell>
                    <StyledTableCell align="right">{row.size}</StyledTableCell>
                    <StyledTableCell align="right">{row.lastModified}</StyledTableCell>
                    <StyledTableCell align="right">
                      <button type = "submit" onClick={(event) => this.deleteFile(event, row.key)}>Delete</button>
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
export default DisplayAllFiles

