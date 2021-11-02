import axios from "axios";

const baseUrl= "http://localhost:2000/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
export const publicRequest = axios.create({
    baseURL: baseUrl,
});

export const userRequest = axios.create({
    baseURL: baseUrl,
    headers: {token: `Bearer ${TOKEN}`},
});