import React from "react";
import { useTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import { Paper } from "@mui/material";

// Type for styled component props
type StyledPaperProps = {
  fontSize?: string; //optional
  bgcolor: string; // compulsory
};

const StyledWithThemeNProps = () => {
  const theme = useTheme();

  const StyledPaper = styled(Paper)<StyledPaperProps>`
    margin: ${theme.spacing(2)};
    padding: ${theme.spacing(5)};
    color: white;

    // props
    font-size: ${(props) => props.fontSize};
    background-color: ${(props) => props.bgcolor};
  `;

  return (
    <>
      <h3>Styled With Theme and Props</h3>
      {/* if custom prop name is same as css property - 
      use camelCase for custom prop */}

      {/* For custom prop - if name is not same as css property - use [lowercase] for prop */}
      {/* If bgColor name is used - console warning appears - React does not recognize the `redBg` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `redbg` instead. If you accidentally passed it from a parent component, remove it from the DOM element. */}
      <StyledPaper fontSize="40px" bgcolor="green">
        Paper with theme and props
      </StyledPaper>
    </>
  );
};

export default StyledWithThemeNProps;
