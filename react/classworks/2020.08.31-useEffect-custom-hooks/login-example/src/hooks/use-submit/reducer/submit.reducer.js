import {
  CLEAR_ERRORS_MESSAGE,
  SUBMIT_FORM_DATA_FAILURE,
  SUBMIT_FORM_DATA_REQUEST,
  SUBMIT_FORM_DATA_SUCCESS,
} from '../submit.constants';

export const submitReducer = (state, action) => {
  switch (action.type) {
    case SUBMIT_FORM_DATA_REQUEST:
      return {
        ...state,
        data: null,
        loading: true,
        errors: null,
      };
    case SUBMIT_FORM_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        errors: null,
      };
    case SUBMIT_FORM_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case CLEAR_ERRORS_MESSAGE:
      return {
        ...state,
        errors: null,
      };
    default:
      return state;
  }
};
