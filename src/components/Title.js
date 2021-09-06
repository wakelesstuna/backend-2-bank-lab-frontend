import styled from "styled-components";

const Title = ({ title }) => {
  return (
    <TitleStyle>
      <h1>{title}</h1>
    </TitleStyle>
  );
};

const TitleStyle = styled.div`
  pointer-events: none;
`;

export default Title;
