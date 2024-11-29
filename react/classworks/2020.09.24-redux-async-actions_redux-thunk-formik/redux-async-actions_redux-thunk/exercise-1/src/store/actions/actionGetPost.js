import {getData} from "../../services";

import {START_UPLOAD_POSTS, SUCCESS_UPLOAD_POSTS, ERROR_UPLOAD_POSTS} from '../constants/posts'

export const actionGetPost = () =>{
    return async function (distpach) {
        distpach({type: START_UPLOAD_POSTS});
        const {status, result, message} = await getData("/posts");
       
        if(status === "Success"){
            distpach({type: SUCCESS_UPLOAD_POSTS, payload: result})
        }
        else{
            distpach({type: ERROR_UPLOAD_POSTS, payload: message})
        }
        
        
    }
}