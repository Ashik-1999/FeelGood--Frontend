import axios from "axios";

export const baseUrl = "https://feelgood.host";
const instance = axios.create({
    baseURL: baseUrl,
});

export default instance;