import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css"
import { useState } from "react";

function App() {
  const [calVal, setcalVal] = useState("");
  const onButtonClick= (buttonText) => {
    if (buttonText === "C") {
      setcalVal("");
    }else if (buttonText === "=") {
     const result = eval(calVal);
     setcalVal(result);
    }else {
      const newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue);
    }
  }
  return (
    <>
    <center>
    <h2>CALCULATOR</h2>
    <div className={styles.calculator}>
        <Display displayvalue={calVal}></Display>
        <ButtonsContainer onButtonClick={onButtonClick }></ButtonsContainer>
      
    </div>
    </center>
    </>
   
  );
}

export default App;
