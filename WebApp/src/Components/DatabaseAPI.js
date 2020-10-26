import axios from 'axios';

const db_url = "https://www.fs.mamatha-guntu.com/";
class DatabaseAPI  {

    
    getUserDetails(){
        return axios.get(db_url + "UserData/getAllUsers").then(response => response.data);
    }

    
    getUser(email){
        return axios.get(db_url + "UserData/getUsers/"+email).then(response => response.data);
    }

    newUser(userData){
        return axios.post(db_url + "UserData/post/userData", userData);
    }

}
export default new DatabaseAPI();
