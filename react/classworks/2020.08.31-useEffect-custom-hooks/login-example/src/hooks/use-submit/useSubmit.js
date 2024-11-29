import { useCallback, useReducer } from "react";

import { submitReducer } from "./reducer/submit.reducer";
import {
  clearErrorsMessage,
  submitFormError,
  submitFormRequested,
  submitFormSuccess,
} from "./actions/submit.action";

const InitialState = {
  data: null,
  loading: false,
  errors: false,
};

export const useSubmit = () => {
  const [state, dispatch] = useReducer(submitReducer, InitialState);
  const { loading, errors, data } = state;

  const sendData = async (service) => {
    dispatch(submitFormRequested());

    await service
      .then(({ data }) => {
        dispatch(submitFormSuccess(data));
      })
      .catch((errors) => {
        dispatch(submitFormError(errors));
      });
  };

  const clearMessage = useCallback(
    () => setTimeout(() => dispatch(clearErrorsMessage()), 5000),
    [dispatch]
  );

  return {
    sendData,
    loading,
    errors,
    data,
    clearMessage,
  };
};
