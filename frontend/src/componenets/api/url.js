import axios from "axios";
const baseURL = axios.create({
    baseURL: "http://localhost:4001/api/v1/notes/",
    withCredentials: true

})
export default baseURL;