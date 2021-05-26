import * as types from "./types";

const initState = {
  user_id: 0,
  user: {},
  loading: false,
  error: "",
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.USER_SIGN_UP:
      return {
        ...state,
        loading: action.payload.loading,
        user: {},
        user_id: 0,
        error: "",
      };
    case types.USER_SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: action.payload.loading,
        user: {},
        user_id: 0,
        error: "",
      };
    case types.USER_SIGN_UP_FAILED:
      return {
        ...state,
        loading: action.payload.loading,
        user: {},
        user_id: 0,
        error: action.payload.error,
      };
    case types.USER_LOG_IN:
      return {
        ...state,
        loading: action.payload.loading,
        user: {},
        user_id: 0,
        error: "",
      };
    case types.USER_LOG_IN_SUCCESS:
      return {
        ...state,
        loading: action.payload.loading,
        user: {},
        user_id: action.payload.user_id,
        error: "",
      };
    case types.USER_LOG_IN_FAILED:
      return {
        ...state,
        loading: action.payload.loading,
        user: {},
        user_id: 0,
        error: action.payload.error,
      };
    case types.USER_AUTH:
      return {
        ...state,
        loading: action.payload.loading,
        user: {},
        error: "",
      };
    case types.USER_AUTH_SUCCESS:
      return {
        ...state,
        loading: action.payload.loading,
        user: action.payload.user,
        error: "",
      };
    case types.USER_AUTH_FAILED:
      return {
        ...state,
        loading: action.payload.loading,
        user: {},
        user_id: 0,
        error: action.payload.error,
      };
    case types.USER_LOG_OUT:
      return {
        ...state,
        loading: action.payload.loading,
        error: "",
      };
    case types.USER_LOG_OUT_SUCCESS:
      return {
        ...state,
        loading: action.payload.loading,
        user: {},
        user_id: 0,
        error: "",
      };
    case types.USER_LOG_OUT_FAILED:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default reducer;
