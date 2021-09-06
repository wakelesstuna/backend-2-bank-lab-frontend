import { useState } from "react";
import styled from "styled-components";
import CustomerList from "./CustomerList";
import Button from "./ui/Button";
import InputField from "./ui/InputField";
import { openAccountFunction } from "../api/api";
import Title from "./Title";
import Logout from "./Logout";

const Admin = () => {
  const [username, setUsername] = useState("");
  const [usernameErrorMsg, setUsernameErrorMsg] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const openAccount = openAccountFunction();

  const handleOpenAccount = () => {};

  const customerList = [
    {
      id: 1,
      username: "Oscar",
    },
    {
      id: 1,
      username: "Kalle",
    },
    {
      id: 1,
      username: "Alice",
    },
    {
      id: 1,
      username: "Oscar",
    },
    {
      id: 1,
      username: "Kalle",
    },
    {
      id: 1,
      username: "Alice",
    },
  ];

  return (
    <AdminStyle>
      <div className='flex'>
        <div className='col2'>
          <div className='createAccount'>
            <InputField
              type='text'
              label='Username'
              placeholder='username...'
              error={usernameError}
              setError={setUsernameError}
              errorMsg={usernameErrorMsg}
              value={username}
              setValue={setUsername}
            />
            <InputField
              type='text'
              label='Password'
              placeholder='password...'
              error={passwordError}
              setError={setPasswordError}
              errorMsg={passwordErrorMsg}
              value={password}
              setValue={setPassword}
            />
            <Button title='Open Account' onClick={handleOpenAccount} />
          </div>
        </div>
        <div className='col2'>
          <CustomerList
            customerList={customerList}
            setUsername={setUsername}
            setPasswordError={setPasswordError}
            setPasswordErrorMsg={setPasswordErrorMsg}
          />
        </div>
      </div>
    </AdminStyle>
  );
};

const AdminStyle = styled.div`
  width: 100%;
  .flex {
    width: 100%;
    display: flex;
  }

  .col2 {
    width: 50%;
  }
  .createAccount {
    padding: 1rem 2rem;
    border: 1px solid black;
    border-radius: 3px;
  }
`;

export default Admin;
