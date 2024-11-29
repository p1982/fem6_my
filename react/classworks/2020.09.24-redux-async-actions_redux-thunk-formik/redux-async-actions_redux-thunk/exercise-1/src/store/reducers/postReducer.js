import {START_UPLOAD_POSTS, SUCCESS_UPLOAD_POSTS, ERROR_UPLOAD_POSTS} from '../constants/posts'

import {v4} from "uuid";

const initialState = {
    list: [],
    preloader: false,
    error: false
};

export const postReducer = (state = initialState, action) =>{
    switch (action.type) {
        case START_UPLOAD_POSTS: 
            return {...state, preloader: true, error: false}
        case SUCCESS_UPLOAD_POSTS: 
            const postsList = action.payload.map(post => {
                const {fullDescription, ...newPost} = post;
                return {...newPost, id: v4()};
            });
                
            return {...state, list: postsList, preloader: false, error: false}
        case ERROR_UPLOAD_POSTS :
            return {...state, preloader: false, error : true}
        default: return state
    }
}
