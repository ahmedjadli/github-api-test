import * as types from "./types";
import axios from "axios";

export const userSignUp = () => ({
  type: types.USER_SIGN_UP,
  payload: {
    loading: true,
  },
});

export const userSignUpSuccess = () => ({
  type: types.USER_SIGN_UP_SUCCESS,
  payload: {
    loading: false,
  },
});

export const userSignUpFailed = (error) => ({
  type: types.USER_SIGN_UP_FAILED,
  payload: {
    loading: false,
    error,
  },
});

export const newUserSignUp = (user) => {
  return (dispatch) => {
    dispatch(userSignUp());
    return axios
      .post("/api/auth/signup", user)
      .then((res) => {
        if (!res.data.success) return res.data.err;
        return res.data.user;
      })
      .then((user) => {
        dispatch(userSignUpSuccess());

        const link = document.createElement("a");
        link.href = "/login";
        link.click();
        link.remove();
      })
      .catch((err) => dispatch(userSignUpFailed(err)));
  };
};

export const userLogin = () => ({
  type: types.USER_LOG_IN,
  payload: {
    loading: true,
  },
});

export const userLoginSuccess = (user_id) => ({
  type: types.USER_LOG_IN_SUCCESS,
  payload: {
    loading: true,
    user_id,
  },
});

export const userLoginFailed = (error) => ({
  type: types.USER_LOG_IN_FAILED,
  payload: {
    loading: true,
    error,
  },
});

export const login = (email, password) => {
  return (dispatch) => {
    dispatch(userLogin());

    return axios
      .post("/api/auth/login", { email, password }, { withCredentials: true })
      .then((res) => {
        if (res.data.success) return res.data.userId;
        return res.data.err;
      })
      .then((user_id) => {
        dispatch(userLoginSuccess(user_id));
      })
      .catch((err) => dispatch(userLoginFailed(err)));
  };
};

export const userAuth = () => ({
  type: types.USER_AUTH,
  payload: {
    loading: true,
  },
});

export const userAuthSuccess = (user) => ({
  type: types.USER_AUTH_SUCCESS,
  payload: {
    loading: false,
    user,
  },
});

export const userAuthFailed = (error) => ({
  type: types.USER_AUTH_FAILED,
  payload: {
    loading: false,
    error,
  },
});

export const auth = () => {
  return (dispatch) => {
    dispatch(userAuth());

    return axios
      .get("/api/auth")
      .then((res) => {
        if (res.data.success) return res.data.user;
        return res.data.err;
      })
      .then((user) => {
        dispatch(userAuthSuccess(user));
      })
      .catch((err) => {
        dispatch(userAuthFailed(err));
      });
  };
};

export const userLogout = () => ({
  type: types.USER_LOG_OUT,
  payload: {
    loading: true,
  },
});

export const userLogoutSuccess = () => ({
  type: types.USER_LOG_OUT_SUCCESS,
  payload: {
    loading: false,
  },
});

export const userLogoutFailed = (error) => ({
  type: types.USER_LOG_OUT_FAILED,
  payload: {
    loading: false,
    error,
  },
});

export const logout = () => {
  return (dispatch) => {
    dispatch(userLogout);

    return axios
      .get("/api/auth/logout")
      .then((res) => {
        if (res.data.success) return true;
        return "logout failed";
      })
      .then(() => dispatch(userLogoutSuccess()))
      .catch((err) => userLogoutFailed(err));
  };
};
