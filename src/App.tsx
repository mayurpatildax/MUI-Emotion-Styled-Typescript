import React from "react";
import MUIPaperStyled from "./components/MUIPaperStyled";
import MUIStyledWithProps from "./components/MUIStyledWithProps";
import NormalStyled from "./components/NormalStyled";
import StyledWithTheme from "./components/StyledWithTheme";
import StyledWithThemeNProps from "./components/StyledWithThemeNProps";

function App() {
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
    </>
  );
}

export default App;
