import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import React from "react";

const MUIPaperStyled = () => {
  // Use bracket for MUI Component
  const StyledPaper = styled(Paper)`
    color: white;
    font-size: large;
    background-color: orange;
    border: 5px solid red;
    border-radius: 10px;
    padding: 20px;
    margin: 2rem;
  `;

  return (
    <>
      <h3>MUI Paper Styled</h3>
      <StyledPaper>Styled Paper Example</StyledPaper>
    </>
  );
};

export default MUIPaperStyled;
