export const getUser = (url, id)=> {
    return async function(dispatch) {
        dispatch({ type: "UPLOAD_USER"});
        const response = await fetch(`${url}${id}`);
        if(response.ok) {
            const result = await response.json(); 
            dispatch({ type: "ADD_USER_INFO", payload: result });            
        }
        else {
            dispatch({ type: "FAILURE_ADD_USER_INFO"}); 
        }

        /*
        if(typeof action === "function") {
            action()
        }
        else {
            reducer()
        }
        */
    }
};