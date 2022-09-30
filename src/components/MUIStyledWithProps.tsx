import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

type StyledButtonProps = {
  fontsize?: string;
};

const MUIStyledWithProps = () => {
  const StyledButton = styled(Button)<StyledButtonProps>`
    font-size: ${(props) => props.fontsize};
    border: 3px solid black;
  `;

  const handleClick = () => {
    console.log("Button is clicked");
  };

  return (
    <>
      <h3>MUI Styled With Props</h3>
      <StyledButton
        onClick={handleClick}
        fontsize="30px"
        color="error"
        variant="contained"
      >
        Click me!
      </StyledButton>
    </>
  );
};

export default MUIStyledWithProps;
