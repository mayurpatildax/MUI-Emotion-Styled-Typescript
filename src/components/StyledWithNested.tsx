import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import React from "react";

const StyledWithNested = () => {
  const StyledPaper = styled(Paper)`
    margin: 10px;
    padding: 10px;
    background-color: orange;
    color: white;
    font-size: 30px;
  `;

  const StyledSpan = styled.span`
    padding: 5px;
    background-color: blue;
    color: white;
    font-size: 20px;
  `;

  return (
    <>
      <h3>Styled Component With Nested elements</h3>
      <StyledPaper>
        Styled Paper with
        {/* We can use styled components in nested fashion as well */}
        <StyledSpan>nested element</StyledSpan>
      </StyledPaper>
    </>
  );
};

export default StyledWithNested;
