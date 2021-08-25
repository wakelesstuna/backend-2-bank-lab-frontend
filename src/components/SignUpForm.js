// Hooks
import { useState } from "react";
// Styles
import styled from "styled-components";
// Components
import Button from "./ui/Button";
import Card from "./ui/Card";
import InputField from "./ui/InputField";
// Icons
import { AiOutlineCloseCircle } from "react-icons/ai";
// Api
import { createUser } from "../api/api";

const SignUpForm = ({ setIsRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerErrorMsg, setRegisterErrorMsg] = useState("");
  const [registerError, setRegisterError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username,
      password,
    };
    try {
      const response = await createUser(newUser);
      setIsRegister(false);
    } catch (error) {
      const err = error.response;
      if (err.status === 500) {
        setRegisterErrorMsg(err.data.message);
        setRegisterError(true);
      } else {
        console.error(err);
      }
    }
  };

  return (
    <SignUpStyle>
      <div className='cardContainer'>
        <Card minWidth='500px'>
          <form>
            <div className='close'>
              <AiOutlineCloseCircle onClick={() => setIsRegister(false)} />
            </div>
            <h2>Sign up</h2>
            <InputField
              type='text'
              label='Username'
              placeholder='username...'
              setError={setRegisterError}
              error={registerError}
              errorMsg={registerErrorMsg}
              value={username}
              setValue={setUsername}
            />
            <InputField
              type='password'
              label='Password'
              placeholder='******'
              value={password}
              setValue={setPassword}
            />
            <div className='spacing'></div>
            <Button title='Create Account' onClick={handleSubmit} />
          </form>
        </Card>
      </div>
    </SignUpStyle>
  );
};

const SignUpStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #0000007f;
  z-index: 10;
  .close {
    position: absolute;
    width: 220%;
    top: 0;
    display: flex;
    justify-content: flex-end;
    svg {
      font-size: 40px;
      cursor: pointer;
    }
  }
  .cardContainer {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  form {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 3rem;
    padding-bottom: 4rem;
    .spacing {
      height: 1rem;
      width: 100%;
    }
  }
`;

export default SignUpForm;
