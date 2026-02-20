import axios from "axios";
import { addAuthorizationHeader } from "./interceptors/request";

const baseURL = import.meta.env.VITE_API_URL; // metaってなに？
const api = axios.create({ baseURL});
api.defaults.headers.common["Content-Type"] = "application/json"; // これを指定しないとどうなるのか？完成後に試す。
api.interceptors.request.use(addAuthorizationHeader);

export default api;