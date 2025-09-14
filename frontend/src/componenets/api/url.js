import axios from "axios";
const baseURL = axios.create({
    baseURL: "https://notetaking-xggl.onrender.com/api/v1/notes/",
    withCredentials: true

})
export default baseURL;