import http from '../http_common';

const searchTask= (searchKey) =>{

     return http.get("/searchdata/"+searchKey)   
}
export default {searchTask};