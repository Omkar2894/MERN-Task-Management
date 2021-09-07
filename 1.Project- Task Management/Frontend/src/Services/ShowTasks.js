import http from '../http_common';

const showTasks= () =>{

     return http.get("/getalltasks")   
}
export default {showTasks};