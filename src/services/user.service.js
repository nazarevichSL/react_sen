import {axiosServise} from "./axios.service";
import {urls} from "../configs/urls";

export const userService = {
    getAll:()=>axiosServise.get(urls.users).then(value => value.data)
}