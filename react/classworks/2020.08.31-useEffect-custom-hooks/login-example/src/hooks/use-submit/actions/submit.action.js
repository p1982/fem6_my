import {
  SUBMIT_FORM_DATA_FAILURE,
  SUBMIT_FORM_DATA_REQUEST,
  SUBMIT_FORM_DATA_SUCCESS,
  CLEAR_ERRORS_MESSAGE,
} from "../submit.constants";

export const submitFormRequested = () => ({
  type: SUBMIT_FORM_DATA_REQUEST,
});

export const submitFormSuccess = (payload) => ({
  type: SUBMIT_FORM_DATA_SUCCESS,
  payload,
});

export const submitFormError = (payload) => ({
  type: SUBMIT_FORM_DATA_FAILURE,
  payload,
});

export const clearErrorsMessage = () => ({
  type: CLEAR_ERRORS_MESSAGE,
});
