import styled from "styled-components";

const Card = ({ children, minWidth, hover }) => {
  return (
    <CardStyle minWidth={minWidth} hover={hover}>
      {children}
    </CardStyle>
  );
};

const CardStyle = styled.div`
  min-width: ${(props) => props.minWidth};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  padding: 0.5rem;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: ${(props) =>
      props.hover ? "0 4px 6px 0 rgba(0, 0, 0, 0.2)" : ""};
  }
`;

export default Card;
