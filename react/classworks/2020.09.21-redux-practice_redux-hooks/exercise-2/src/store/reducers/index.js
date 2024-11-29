import { combineReducers } from 'redux'
import {loginModalReducer} from './loginModalReducer';
import {loginReducer} from './loginReducer'

export default combineReducers({
  name: loginReducer,
  isLoginModalOpen: loginModalReducer
});