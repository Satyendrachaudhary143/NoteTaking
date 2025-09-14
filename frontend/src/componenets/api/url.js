import axios from "axios";
const baseURL = axios.create({
    baseURL: "/api/v1/notes/",
    withCredentials: true

})
export default baseURL;