import styled from "styled-components";
import Card from "./ui/Card";

const Account = ({ account, onClick }) => {
  return (
    <AccountStyle onClick={onClick}>
      <Card hover={true}>
        <div className='contentWrapper'>
          <div className='account'>
            <h5>Account ID:</h5>
            <p className='accountId'>{account.id}</p>
            <div className='flexRow'>
              <p>Account Number:</p>
              <p>{account.accountNumber}</p>
            </div>
          </div>
          <div className='flexRow'>
            <p>Balance: </p>
            <p>{account.balance}</p>
          </div>
        </div>
      </Card>
    </AccountStyle>
  );
};

const AccountStyle = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  .contentWrapper {
    padding: 0rem 1rem;
  }

  .accountId {
    font-size: 0.7rem;
  }

  .flexRow {
    display: flex;
    align-items: center;
    p {
      padding-right: 10px;
    }
  }
`;

export default Account;
