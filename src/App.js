// Styles
import styled from "styled-components";
import { colors } from "./constants/color";
import AdminPage from "./pages/AdminPage";
// Pages
import HomePage from "./pages/HomePage";

function App() {
  return (
    <AppStyle colors={colors}>
      {/* <AdminPage /> */}
      <HomePage />
    </AppStyle>
  );
}

const AppStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default App;
