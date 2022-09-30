import styled from "@emotion/styled";
import React from "react";

const NormalStyled = () => {
  const StyledDiv = styled.div`
    /* Write property names like css property names */
    color: white;
    font-size: large;
    background-color: orange;
    border: 5px solid red;
    border-radius: 10px;

    /* all units */
    padding: 20px;
    margin: 2rem;
    border-bottom: 5pt solid blue;
  `;

  return (
    <>
      <h3>NormalStyled</h3>
      <StyledDiv>Styled Div</StyledDiv>
    </>
  );
};

export default NormalStyled;
