// Styles
import styled from "styled-components";
// Icons
import { RiLogoutBoxLine } from "react-icons/ri";

const Logout = ({ setIsLoggedIn, setUser }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({});
  };
  return (
    <LogoutStyle onClick={handleLogout}>
      <RiLogoutBoxLine />
    </LogoutStyle>
  );
};

const LogoutStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

export default Logout;
