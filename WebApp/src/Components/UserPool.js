import { CognitoUserPool } from 'amazon-cognito-identity-js';

//set userpoolid and client id 
const poolData = {
  UserPoolId: '',
  ClientId: ''
};

export default new CognitoUserPool(poolData);
