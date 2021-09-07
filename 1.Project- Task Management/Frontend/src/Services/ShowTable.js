import http from '../http_common';

const searchTable= (searchKey) =>{

     return http.get("/searchtable/"+searchKey)   
}
export default {searchTable};