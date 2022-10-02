import React from "react";
import { useTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import { Paper } from "@mui/material";

const StyledWithTheme = () => {
  const theme = useTheme();

  const StyledPaper = styled(Paper)`
    margin: ${theme.spacing(2)};
    padding: ${theme.spacing(5)};
    background-color: ${theme.palette.primary.main};
    color: white;
    font-size: 30px;
  `;

  return (
    <>
      <h1>Styled Component with Theme</h1>
      <StyledPaper>Paper</StyledPaper>
    </>
  );
};

export default StyledWithTheme;
