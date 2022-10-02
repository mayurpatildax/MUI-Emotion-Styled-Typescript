import React from "react";
import styled from "@emotion/styled";
import { Paper } from "@mui/material";

// Type for styled component props
type StyledPaperProps = {
  // If we are not passing values to props, make its type as boolean
  // and in styled component add style to it

  largefont?: boolean; //optional
  redbg?: boolean; // optional
  greenbg?: boolean; //optional
  whitetext?: boolean; // optional
};

const StyledWithConditions = () => {
  const StyledPaper = styled(Paper)<StyledPaperProps>`
    margin: 25px;
    padding: 10px;
    border: 3px solid black;
    border-radius: 35px;

    // props with both [true and false values]
    font-size: ${(props) => (props.largefont ? "45px" : "25px")};

    // Single condition handling
    /* background-color: ${(props) => (props.redbg ? "red" : "skyblue")}; */

    // Multiple props condition handling
    background-color: ${(props) =>
      (props.redbg && "red") || (props.greenbg && "green") || "skyblue"};

    // props with only true value [if whiteText prop not passed - take default value(black)]
    color: ${(props) => props.whitetext && "white"};
  `;

  return (
    <>
      <h3>Styled With Prop Conditions</h3>

      {/* Always use lowercase for custom attribute/prop */}
      {/* Warning - React does not recognize the `redBg` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `redbg` instead. If you accidentally passed it from a parent component, remove it from the DOM element. */}
      <StyledPaper largefont redbg whitetext>
        Paper with Conditional Props 1
      </StyledPaper>

      <StyledPaper largefont greenbg>
        Paper with Conditional Props 2
      </StyledPaper>

      <StyledPaper>Paper with Conditional Props 3</StyledPaper>
    </>
  );
};

export default StyledWithConditions;
