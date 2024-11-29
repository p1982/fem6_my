import {request} from "./axios.config";

export const getData = async (path) => {
    const response = await request.get(path);

    if(response.status < 300) {
        return {
            status: "Success",
            result: response.data        
        }
    }
    else {
        return {
            status: "Error",
            message: "Ошибка запроса"
        }
    }
}