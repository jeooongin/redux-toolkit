import React from "react";
import { useDispatch, useSelector } from "react-redux";
import userSlice from "../reducers/user";

const LogIn = () => {
  const { logInSuccess } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    if (logInSuccess === true) {
      dispatch(userSlice.actions.logOut());
    } else {
      dispatch(userSlice.actions.logIn());
    }
  };

  return (
    <>
      <div>{logInSuccess ? "로그인 성공" : "로그아웃 성공"}</div>
      <div>
        <button onClick={onClickHandler}>
          {logInSuccess ? "로그아웃" : "로그인"}
        </button>
      </div>
    </>
  );
};

export default LogIn;
