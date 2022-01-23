import {axiosServise} from "./axios.service";
import {urls} from "../configs/urls";

export const postService ={
    getByUserId:(id)=>axiosServise.get(`${urls.posts}?userId=${id}`).then(value => value.data)
}