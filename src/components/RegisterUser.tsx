import axios from 'axios';
import { Component } from 'react';

const obj = {
    username : "",
    email : "",
    password : "",
    cellphone : ""
};

class registerUser extends Component {


    connectdb = () => {
        axios.post('http://localhost/Teki/insert.php',obj)
        .then(res=> console.log(res.data))
        .catch(error => {
            console.log(error.response)
        });
    }
    registerUser = () => {
        
    };
}

export default registerUser;
