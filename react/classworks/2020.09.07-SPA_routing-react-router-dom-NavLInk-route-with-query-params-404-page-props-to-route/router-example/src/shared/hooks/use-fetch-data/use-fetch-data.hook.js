import { useEffect, useReducer } from 'react';
import axios from 'axios';

import { fetchDataReducer } from './reducer/fetch-data.reducer';
import {
  fetchDataRequested,
  fetchDataSuccess,
  fetchDataFailure,
} from './actions/use-fetch-data.action';

const initialState = {
  data: [],
  loading: true,
  error: null,
};

export const useFetchData = url => {
  const [state, dispatch] = useReducer(fetchDataReducer, initialState);
  const { data, loading, error } = state;
  useEffect(() => {
    dispatch(fetchDataRequested());
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/${url}?key=$2a$10$vKflJTCyAbiSJFwgdIfD7eupC8x8L.9lTW1r5f.3ffc9gSMDJBrNC`,
      )
      .then(response => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch(err => {
        dispatch(fetchDataFailure(err));
      });
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};
