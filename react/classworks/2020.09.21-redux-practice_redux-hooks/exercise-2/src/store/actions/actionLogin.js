import {LOGIN} from '../constants'

export const actionLogin = (payload) => {
    return {
        type: LOGIN,
        payload
    }
}