import http from '../http_common';

const addTasks= taskObj =>{

     return http.post("/addtask", taskObj)   
}
export default {addTasks};