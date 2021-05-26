import React, { useEffect, useState } from "react";
import { auth } from "./../../../store/user/actions";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [verified, setVerified] = useState(false);
    let user = useSelector((state) => state.user.user);
    let user_id = useSelector((state) => state.user.user_id);
    useEffect(() => {
      dispatch(auth());
      if (user_id === 0) {
        history.push("/login");
      }
    }, []);
    if (user.isLoggedIn) {
      return <WrappedComponent {...props} />;
    } else {
      return <h1>Loading ...</h1>;
    }
  };
};

export default withAuth;
