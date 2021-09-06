// Styles
import styled from "styled-components";
import { colors } from "../../constants/color";

const Button = ({ title, onClick }) => {
  return (
    <ButtonStyle colors={colors} onClick={onClick}>
      {title}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.div`
  width: fit-content;
  padding: 0.5rem 2rem;
  margin: 1rem auto;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  background: ${(props) => props.colors.primary};
  color: ${(props) => props.colors.secendary};
  text-align: center;
  font-weight: bolder;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    background: ${(props) => props.colors.secendary};
    color: ${(props) => props.colors.primary};
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default Button;
