import { 
  START_LOADER, 
  STOP_LOADER, 
  OPEN_SNACKBAR, 
  CLOSE_SNACKBAR,
  SIGNIN_BEGIN, SIGNIN_SUCCESS, SIGNIN_FAILURE
 } from "../constants/action-types";

const initialState = {
  isLoading: false,
  isSnackbarOpen: false,
  snackbarMessage: '',
  authToken: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SNACKBAR:
      return { ...state, isSnackbarOpen: true, snackbarMessage: action.payload };
    case CLOSE_SNACKBAR:
      return { ...state, isSnackbarOpen: false, snackbarMessage: '' };
    case START_LOADER:
      return { ...state, isLoading: true };
    case STOP_LOADER:
      return { ...state, isLoading: false };
    case SIGNIN_BEGIN:
      return { ...state, isLoading: true, isSnackbarOpen: false };
    case SIGNIN_SUCCESS:
      return { ...state, isLoading: false, authToken: action.payload, errorMessage: '' } 
    case SIGNIN_FAILURE:
      return { ...state, isLoading: false, isSnackbarOpen: true, snackbarMessage: action.payload } 
    default:
      return state;
  }
};

export default rootReducer;