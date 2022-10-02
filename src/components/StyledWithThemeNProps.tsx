import React from "react";
import { useTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import { Paper } from "@mui/material";

// Type for styled component props
type StyledPaperProps = {
  fontsize?: string; //optional
  bgColor: string; // compulsory
};

const StyledWithThemeNProps = () => {
  const theme = useTheme();

  const StyledPaper = styled(Paper)<StyledPaperProps>`
    margin: ${theme.spacing(2)};
    padding: ${theme.spacing(5)};
    color: white;

    // props
    font-size: ${(props) => props.fontsize};
    background-color: ${(props) => props.bgColor};
  `;

  return (
    <>
      <h3>Styled With Theme and Props</h3>
      <StyledPaper fontsize="40px" bgColor="green">
        Paper with theme and props
      </StyledPaper>
    </>
  );
};

export default StyledWithThemeNProps;
