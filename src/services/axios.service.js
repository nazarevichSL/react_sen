import axios from "axios";

import baseUrl from "../configs/urls";

export const axiosServise = axios.create({
    baseURL:baseUrl
});