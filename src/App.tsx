import React from "react";
import MUIPaperStyled from "./components/MUIPaperStyled";
import MUIStyledWithProps from "./components/MUIStyledWithProps";
import NormalStyled from "./components/NormalStyled";
import StyledWithConditions from "./components/StyledWithConditions";
import StyledWithTheme from "./components/StyledWithTheme";
import StyledWithThemeNProps from "./components/StyledWithThemeNProps";

// Importing styled component
import StyledButtonExport from "./components/StyledButtonExport";

function App() {
  const handleBtnClick = () => console.log("StyledButton is clicked");

  return (
    <>
      <div className="App">MUI Emotion Styled Components</div>
      <hr />
      <NormalStyled />
      <hr />
      <MUIPaperStyled />
      <hr />
      <MUIStyledWithProps />
      <hr />
      <StyledWithTheme />
      <hr />
      <StyledWithThemeNProps />
      <hr />
      <StyledWithConditions />
      <hr />
      <h3>Importing styled component</h3>
      <StyledButtonExport variant="contained" onClick={handleBtnClick}>
        Click here.
      </StyledButtonExport>
    </>
  );
}

export default App;
