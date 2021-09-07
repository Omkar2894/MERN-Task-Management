import http from '../http_common';

const registerUser= registerObj =>{

     return http.post("/register", registerObj)   
}
export default {registerUser};