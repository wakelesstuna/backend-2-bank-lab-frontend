// React
import { useState } from "react";
// Styles
import styled from "styled-components";
// Components
import Button from "./ui/Button";
import InputField from "./ui/InputField";
// Api
import { authUser } from "../api/api";

const Login = ({
  user,
  setUser,
  setAdminLoggedIn,
  setUserLoggedIn,
  setIsLoggedIn,
  setIsRegister,
}) => {
  const [loginError, setLoginError] = useState(false);
  const [loginErrorMsg, setLoginErrorMsg] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log("sending auth request for server");
    try {
      const response = await authUser(username, password);
      const user = response.data;
      const fetchUser = {
        ...user,
        account: [
          {
            id: "123112-12321",
            accountNumber: 1,
            balance: 0,
          },
        ],
      };
      setUser(fetchUser);
      // setUser(user);
      setLoginError(false);
      if (user.role == "ADMIN") {
        setAdminLoggedIn(true);
      } else if (user.role == "USER") {
        setUserLoggedIn(true);
      }
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
        <div className='signup' onClick={() => setIsRegister(true)}>
          <p>
            Dont't have an account? <span>Sign Up</span>
          </p>
        </div>
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
  .signup {
    cursor: pointer;
    p {
      font-size: 0.8rem;
    }
    span {
      font-weight: bolder;
    }
  }
`;
export default Login;
