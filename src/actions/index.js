import {START_LOADER, STOP_LOADER, OPEN_SNACKBAR, CLOSE_SNACKBAR, SIGNIN_BEGIN, SIGNIN_SUCCESS, SIGNIN_FAILURE } from '../constants/action-types';
import React from 'react';
import config from '../config';

export const startLoader = () => ({ type: START_LOADER });
export const stopLoader = () => ({ type: STOP_LOADER });
export const openSnackbar = () => ({ type: OPEN_SNACKBAR });
export const closeSnackbar = () => ({ type: CLOSE_SNACKBAR });

export function signIn(email, password) {
  return dispatch => {
    dispatch({ type: SIGNIN_BEGIN });
    return fetch(config.API_URL)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch({ type: SIGNIN_SUCCESS, payload: json });
        return json;
      })
      .catch(error => dispatch({ type: SIGNIN_FAILURE, payload: 'Invalid username or password' }));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}