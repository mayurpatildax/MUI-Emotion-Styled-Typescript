import React from "react";
import MUIPaperStyled from "./components/MUIPaperStyled";
import NormalStyled from "./components/NormalStyled";

function App() {
  return (
    <>
      <div className="App">MUI Emotion Styled Components</div>
      <hr />
      <NormalStyled />
      <hr />
      <MUIPaperStyled />
    </>
  );
}

export default App;
