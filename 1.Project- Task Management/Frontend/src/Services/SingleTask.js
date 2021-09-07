import http from '../http_common';

const showSingleTasks= (id) =>{

     return http.get("/getsingletask/"+id)   
}
export default {showSingleTasks};