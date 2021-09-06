import styled from "styled-components";
import { colors } from "../constants/color";
// components
import Card from "../components/ui/Card";
import Title from "../components/Title";
import Atm from "../components/Atm";
import Login from "../components/Login";

import { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import AdminPage from "./AdminPage";

const HomePage = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    account: [{}],
    roles: [
      {
        role: "ADMIN",
      },
    ],
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);

  return (
    <HomeStyle colors={colors}>
      <Title title='Best Bank Ever' />
      <Card minWidth='800px'>
        {!isLoggedIn && (
          <Login
            user={user}
            setUser={setUser}
            setIsLoggedIn={setIsLoggedIn}
            setUserLoggedIn={setUserLoggedIn}
            setAdminLoggedIn={setAdminLoggedIn}
            setIsRegister={setIsRegister}
          />
        )}
        {userLoggedIn && (
          <Atm
            user={user}
            setUser={setUser}
            setIsLoggedIn={setIsLoggedIn}
            setUserLoggedIn={setUserLoggedIn}
          />
        )}
        {adminLoggedIn && (
          <AdminPage
            setIsLoggedIn={setIsLoggedIn}
            setAdminLoggedIn={setAdminLoggedIn}
            setUser={setUser}
          />
        )}
        {isRegister && <SignUpForm setIsRegister={setIsRegister} />}
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
