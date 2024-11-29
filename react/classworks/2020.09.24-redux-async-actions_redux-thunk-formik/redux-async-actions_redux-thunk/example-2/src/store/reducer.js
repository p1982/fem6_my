const inintialState = {
    user: [],
    users: [],
    currentUser: {}
}

export const reducer = (state = inintialState, {type, payload})=> {
    switch(type){
        case "UPLOAD_USER": 
            return {...state, preloader: true, error: false};
        case "ADD_USER_INFO":
            return {...state, user: payload, preloader: false, error: false}
        case "FAILURE_ADD_USER_INFO":
            return {...state, preloader: false, error: "Не удалось получить данные"};
        default: 
            return state;
    }
};