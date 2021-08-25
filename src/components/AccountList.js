// Styles
import styled from "styled-components";
import { colors } from "../constants/color";
// Components
import Account from "./Account";

const AccountList = ({ accountList, setCurrentAccount }) => {
  const handleAccount = (account) => {
    setCurrentAccount(account.accountNumber);
  };

  const sortedList = accountList.sort(
    (a, b) => parseFloat(a.accountNumber) - parseFloat(b.accountNumber)
  );
  return (
    <AccountListStyle colors={colors}>
      <h3>Account List:</h3>
      <div className='listContainer'>
        {sortedList &&
          sortedList.map((account) => (
            <Account
              key={account.id}
              account={account}
              onClick={() => handleAccount(account)}
            />
          ))}
      </div>
    </AccountListStyle>
  );
};

const AccountListStyle = styled.div`
  padding: 0 1rem;
  margin: auto;
  .listContainer {
    height: 500px;
    overflow-y: scroll;
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: ${(props) =>
        props.colors.scrollBar ? props.colors.scrollBarBackground : "#f5f5f5"};
    }

    &::-webkit-scrollbar {
      width: 12px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: ${(props) =>
        props.colors.scrollBar ? props.colors.scrollBar : "red"};
    }
  }
`;

export default AccountList;
