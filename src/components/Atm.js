// Hooks
import { useEffect, useState } from "react";
// Styles
import styled from "styled-components";
// Components
import Button from "./ui/Button";
import InputField from "./ui/InputField";
import Title from "./Title";
import User from "./User";
import Logout from "./Logout";
import AccountList from "./AccountList";
// Api
import {
  makeDeposit,
  makeWithdraw,
  fetchUser,
  createAccount,
} from "../api/api";

const Atm = ({ user, setUser, setIsLoggedIn }) => {
  const [currentAccount, setCurrentAccount] = useState(1);
  const [balance, setBalance] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const [withdraw, setWithdraw] = useState(0);

  const [withdrawError, setWithdrawError] = useState(false);
  const [withdrawErrorMsg, setWithdrawErrorMsg] = useState("");

  const handleCreateAccount = async () => {
    const response = await createAccount(user.username);
    setCurrentAccount(response.data.accountNumber);
  };

  const handleDeposit = async () => {
    const response = await makeDeposit(user.username, deposit, currentAccount);
    setBalance(response.data.balance);
  };

  const handleWithdraw = async () => {
    try {
      const response = await makeWithdraw(
        user.username,
        withdraw,
        currentAccount
      );
      setBalance(response.data.balance);
      setWithdrawError(false);
    } catch (error) {
      const err = error.response;
      if (err.status === 500) {
        setWithdrawErrorMsg(err.data.message);
        setWithdrawError(true);
      } else {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetchUser(user.username);
      const fetchedUser = await response.data;
      setUser(fetchedUser);
      setBalance(fetchedUser.account[currentAccount - 1].balance);
    }
    fetchData();
  }, [currentAccount, balance, user]);

  return (
    <AtmStyle>
      <div className='header'>
        <div className='titleWrapper'>
          <Title title='Atm' />
        </div>
        <div className='logoutIconWrapper'>
          <Logout setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
        </div>
      </div>
      <div className='row'>
        <div className='col2'>
          <User user={user} currentAccount={currentAccount} />
          <div className='balanceContainer'>
            <h4>Balance:</h4>
            <p>{balance}</p>
          </div>
          <div>
            <InputField
              type='number'
              label='Deposit'
              placeholder='amount...'
              value={deposit}
              setValue={setDeposit}
            />
            <Button title='Deposit' onClick={handleDeposit} />
          </div>
          <div>
            <InputField
              type='number'
              label='Withdraw'
              placeholder='amount...'
              setError={setWithdrawError}
              error={withdrawError}
              errorMsg={withdrawErrorMsg}
              value={withdraw}
              setValue={setWithdraw}
            />
            <Button title='Withdraw' onClick={handleWithdraw} />
          </div>
        </div>
        <div className='col2'>
          <Button title='Create new account' onClick={handleCreateAccount} />
          <AccountList
            accountList={user.account}
            setCurrentAccount={setCurrentAccount}
          />
        </div>
      </div>
    </AtmStyle>
  );
};

const AtmStyle = styled.div`
  width: 100%;
  padding: 0 2rem;
  padding-bottom: 2rem;
  .row {
    display: flex;
    width: 100%;
  }
  .col2 {
    width: 50%;
  }
  .header {
    display: flex;
    align-items: center;
    .titleWrapper {
      width: 90%;
    }
    .logoutIconWrapper {
      width: 10%;
      cursor: pointer;
    }
  }
  .balanceContainer {
    display: flex;
    width: 100%;
    align-items: center;
    p {
      padding-left: 5px;
    }
  }
`;

export default Atm;
