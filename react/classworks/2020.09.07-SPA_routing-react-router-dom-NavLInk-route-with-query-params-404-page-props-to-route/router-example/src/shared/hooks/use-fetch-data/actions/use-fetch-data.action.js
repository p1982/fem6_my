import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from '../use-fetch-data.constants';

export const fetchDataRequested = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = payload => ({
  type: FETCH_DATA_SUCCESS,
  payload,
});

export const fetchDataFailure = payload => ({
  type: FETCH_DATA_FAILURE,
  payload,
});
