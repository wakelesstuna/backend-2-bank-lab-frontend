import { useState } from "react";
import styled from "styled-components";
import Button from "./ui/Button";
import InputField from "./ui/InputField";

import { authUser } from "../api/api";

const Login = ({ setUser, setIsLoggedIn }) => {
  const [loginError, setLoginError] = useState(false);
  const [loginErrorMsg, setLoginErrorMsg] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await authUser(username, password);
      console.log(response.data);
      setUser(response.data);
      setLoginError(false);
      setIsLoggedIn(true);
    } catch (error) {
      const err = error.response;
      if (err.status === 400 && err !== undefined) {
        setLoginErrorMsg(err.data.message);
        setLoginError(true);
      }
    }
  };

  return (
    <LoginStyle>
      <div className='title'>
        <h4>Login</h4>
      </div>
      <div className='input'>
        <InputField
          type='text'
          label='Username'
          placeholder='username...'
          setError={setLoginError}
          error={loginError}
          errorMsg={loginErrorMsg}
          value={username}
          setValue={setUserName}
        />
        <InputField
          type='password'
          label='Password'
          placeholder='******'
          value={password}
          setValue={setPassword}
        />
        <Button title='Sign In' onClick={handleLogin} />
      </div>
    </LoginStyle>
  );
};

const LoginStyle = styled.div`
  .title {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .input {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export default Login;