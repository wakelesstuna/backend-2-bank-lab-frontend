// Styles
import styled from "styled-components";
// Util
import { makeFirstLetterCapital } from "../utils/util";

const User = ({ user, currentAccount }) => {
  const username = makeFirstLetterCapital(user.username);

  return (
    <UserStyle>
      <div>
        <h3>User:</h3>
        <p>{username}</p>
      </div>
      <div>
        <h3>UserID:</h3>
        <p>{user.id}</p>
      </div>
      <div>
        <h3>Current Account:</h3>
        <p>{currentAccount}</p>
      </div>
    </UserStyle>
  );
};

const UserStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    display: flex;
    align-items: center;
  }
  p {
    padding-left: 5px;
  }
`;

export default User;
