import React from "react";
import styled from "@emotion/styled";
import { Paper } from "@mui/material";

// Type for styled component props
type StyledPaperProps = {
  // If we are not passing values to props, make its type as boolean
  // and in styled component add style to it

  largeFont?: boolean; //optional
  redBg?: boolean; // optional
  greenBg?: boolean; //optional
  whiteText?: boolean; // optional
};

const StyledWithConditions = () => {
  const StyledPaper = styled(Paper)<StyledPaperProps>`
    margin: 25px;
    padding: 10px;
    border: 3px solid black;
    border-radius: 35px;

    // props with both [true and false values]
    font-size: ${(props) => (props.largeFont ? "45px" : "25px")};

    // Single condition handling
    /* background-color: ${(props) => (props.redBg ? "red" : "skyblue")}; */

    // Multiple props condition handling
    background-color: ${(props) =>
      (props.redBg && "red") || (props.greenBg && "green") || "skyblue"};

    // props with only true value [if whiteText prop not passed - take default value(black)]
    color: ${(props) => props.whiteText && "white"};
  `;
  return (
    <>
      <h3>Styled With Prop Conditions</h3>
      <StyledPaper largeFont redBg whiteText>
        Paper with Conditional Props 1
      </StyledPaper>

      <StyledPaper largeFont greenBg>
        Paper with Conditional Props 2
      </StyledPaper>

      <StyledPaper>Paper with Conditional Props 3</StyledPaper>
    </>
  );
};

export default StyledWithConditions;
