import React from "react";
import { useSelector } from "react-redux";

import LogInForm from "../components/LogInForm";

const index = () => {
  const { me } = useSelector((state) => state.user);

  return <>{me ? <p>로그인 성공</p> : <LogInForm />}</>;
};

export default index;
