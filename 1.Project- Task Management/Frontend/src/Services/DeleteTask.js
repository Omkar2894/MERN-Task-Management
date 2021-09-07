import http from '../http_common';

const deleteTasks= (id) =>{

     return http.delete("/deletetask/"+id)   
}
export default {deleteTasks};