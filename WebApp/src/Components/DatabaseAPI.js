import axios from 'axios';

const db_url = "http://localhost:8080/";
class DatabaseAPI  {

    //User data operations
    getUserDetails(){
        return axios.get(db_url + "UserData/getAllUsers").then(response => response.data);
    }

    getUser(email){
        return axios.get(db_url + "UserData/getUsers/"+email).then(response => response.data);
    }

    newUser(userData){
        return axios.post(db_url + "UserData/post/userData", userData);
    }

    getUserStatus(email){
        return axios.get(db_url + "UserData/getUserStatus/" + email).then (response => response.data);
    }

    updateUserStatusIn(email){
        return axios.put(db_url+ "UserData/updateUserStatusIn/"+ email);
    }

    updateUserStatusOut(email){
        return axios.put(db_url+ "UserData/updateUserStatusOut/"+ email);
    }

    //file operations
    getAllFiles(){
        return axios.get(db_url + "FileData/getAllFiles").then(response => response.data);
    }

}
export default new DatabaseAPI();
