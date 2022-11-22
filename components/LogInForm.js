import { Button, Form, Input } from "antd";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useInput from "../hooks/useInput";
import { logIn } from "../reducers/user";

const LogInForm = () => {
  const [email, onChangeEmail, setEmail] = useInput("");
  const [password, onChangePassword, setPassword] = useInput("");

  const dispatch = useDispatch();
  const { logInDone, logInLoading } = useSelector((state) => state.user);

  useEffect(() => {
    if (logInDone) {
      setEmail("");
      setPassword("");
    }
  }, [logInDone]);

  const onSubmitForm = useCallback(() => {
    dispatch(logIn({ email, password }));
  }, [email, password]);

  return (
    <Form onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-email">이메일</label>
        <Input
          name="user-email"
          type="email"
          value={email}
          onChange={onChangeEmail}
          placeholder="이메일을 입력해주세요."
          required
        />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          placeholder="비밀번호를 입력해주세요."
          required
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <Button type="primary" htmlType="submit" loading={logInLoading}>
          로그인
        </Button>
      </div>
    </Form>
  );
};

export default LogInForm;
