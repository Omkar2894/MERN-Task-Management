import http from '../http_common';

const editTask= (taskObj, id ) =>{
     console.log(id);
     return http.put("/updatetask/"+id, taskObj)   
}
export default {editTask};