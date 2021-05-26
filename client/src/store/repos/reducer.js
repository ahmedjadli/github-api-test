import * as types from "./types";

const initState = {
  repos: [],
  loading: false,
  error: "",
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_REPOS_BY_USERNAME:
      return {
        ...state,
        loading: action.payload.loading,
        repos: [],
        error: "",
      };
    case types.GET_REPOS_BY_USERNAME_SUCCESS:
      return {
        ...state,
        repos: action.payload.repos,
        loading: action.payload.loading,
        error: "",
      };
    case types.GET_REPOS_BY_USERNAME_FAILED:
      return {
        ...state,
        loading: action.payload.loading,
        repos: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default reducer;
