import styled from "styled-components";
import { colors } from "../constants/color";
// components
import Card from "../components/ui/Card";
import Title from "../components/Title";
import Atm from "../components/Atm";
import Login from "../components/Login";

import { useState } from "react";

const HomePage = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    account: [{}],
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <HomeStyle colors={colors}>
      <Title title='Best Bank Ever' />
      <Card minWidth='800px'>
        {!isLoggedIn && (
          <Login setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
        )}
        {isLoggedIn && (
          <Atm user={user} setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
        )}
      </Card>
    </HomeStyle>
  );
};

const HomeStyle = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    ${(props) => props.colors.primary},
    ${(props) => props.colors.secendary}
  );
`;

export default HomePage;
