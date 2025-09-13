import axios from "axios";
const baseURL = axios.create({
    baseURL: "https://note-taking-orpin.vercel.app/api/v1/notes/",
    withCredentials: true

})
export default baseURL;