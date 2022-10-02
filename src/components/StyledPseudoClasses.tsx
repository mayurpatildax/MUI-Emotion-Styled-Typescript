import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

const StyledPseudoClasses = () => {
  const StyledBtn = styled(Button)`
    color: white;
    font-size: large;
    background-color: red;
    border: 5px solid blue;
    border-radius: 10px;
    padding: 20px;
    margin: 2rem;

    // pseudo-classes
    :hover {
      background-color: cadetblue;
      color: red;
      border: 5px solid red;
    }

    :active {
      height: 100px;
      width: 300px;
    }
  `;

  return (
    <>
      <h3>Styled Component with Pseudo Classes</h3>
      <StyledBtn>Click here!</StyledBtn>
    </>
  );
};

export default StyledPseudoClasses;
