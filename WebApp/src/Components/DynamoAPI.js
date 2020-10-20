import axios from 'axios';

const db_url = "http://localhost:8080/UserData";
class DynamoAPI  {
    getUserDetails(){
        return axios.get(db_url + "/getAllUsers").then(response => response.data);
    }

    getUser(userid){
        return axios.get(db_url + "/getUsers/"+userid).then(response => response.data);
    }

    newUser(userData){
        return axios.post(db_url + "/post/userData", userData);
    }   
}
