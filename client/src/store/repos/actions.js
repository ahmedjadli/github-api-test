import * as types from "./types";
import axios from "axios";

//FETCH REPOS BY USER
export const requestRepos = () => ({
  type: types.GET_REPOS_BY_USERNAME,
  payload: {
    loading: true,
  },
});

export const requestReposSuccess = (repos) => ({
  type: types.GET_REPOS_BY_USERNAME_SUCCESS,
  payload: {
    repos,
    loading: false,
  },
});

export const requestReposFailed = (error) => ({
  type: types.GET_REPOS_BY_USERNAME_FAILED,
  payload: {
    loading: false,
    error,
  },
});

export const fetchReposByUsername = (username) => {
  return (dispatch) => {
    dispatch(requestRepos());

    if (username === "") {
      return dispatch(
        requestReposFailed("Please insert a valid github username.")
      );
    } else {
      return axios
        .get(`/api/repos/${username}`)
        .then((res) => {
          if (!res.data.success) return res.data.err;
          return res.data.repos;
        })
        .then((repos) => dispatch(requestReposSuccess(repos)))
        .catch((err) => {
          console.error(err);
          dispatch(requestReposFailed(err));
        });
    }
  };
};
