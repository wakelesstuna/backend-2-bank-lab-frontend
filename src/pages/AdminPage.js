import styled from "styled-components";
import Admin from "../components/Admin";
import Logout from "../components/Logout";
import Title from "../components/Title";
import Card from "../components/ui/Card";
import { colors } from "../constants/color";

const AdminPage = ({ setIsLoggedIn, setAdminLoggedIn, setUser }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
    setAdminLoggedIn(false);
    setUser({});
  };
  return (
    <AdminStyle colors={colors}>
      <div className='header'>
        <div className='titleWrapper'>
          <Title title='Admin panel' />
        </div>
        <div className='logoutIconWrapper'>
          <Logout handleLogout={handleLogout} />
        </div>
      </div>
      <Admin />
    </AdminStyle>
  );
};

const AdminStyle = styled.div`
  width: 100%;
  padding: 0 2rem;
  padding-bottom: 2rem;
  /* background: linear-gradient(
    ${(props) => props.colors.primary},
    ${(props) => props.colors.secendary} 
  ); */
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
`;

export default AdminPage;
