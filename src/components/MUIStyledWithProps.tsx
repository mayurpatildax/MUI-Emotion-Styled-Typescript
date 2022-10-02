import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

type StyledButtonProps = {
  fontSize?: string;
};

const MUIStyledWithProps = () => {
  const StyledButton = styled(Button)<StyledButtonProps>`
    font-size: ${(props) => props.fontSize};
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
        // if custom prop name is same as css property - use camelCase for custom prop
        fontSize="30px"
        color="error"
        variant="contained"
      >
        Click me!
      </StyledButton>
    </>
  );
};

export default MUIStyledWithProps;
