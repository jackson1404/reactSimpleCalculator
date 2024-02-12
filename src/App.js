import './App.css';
import Output from './components/Output';
import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';

function App() {

  const[output, setoutputText] = useState(0);
  const[input,  setinputText] = useState("")

  function clickEventHandle(value) {
    if (value === "C") {
        setinputText("");
        setoutputText("0");
    } else if (value === "=") {
        try {
            const result = eval(input);
            setoutputText(result);
            setinputText(input);
        } catch (error) {
            console.error("Error evaluating expression:", error);
        }
    } else if (value === "Back") {
        if (input.length === 1) {
            setinputText("0");
        } else if (input.length > 1) {
            setinputText(input.slice(0, input.length - 1));
        }
    } else {
        if (input === "0") {
            setinputText(value);
        } else {
            setinputText(input + value);
        }
    }
}


  return (
    <div className='container'>
      <div className='calculator-frame'>
      <Output output={output}></Output>
      <Input input={input}></Input>
      <Button clickEventHandle={clickEventHandle}></Button>
      </div>
      
    </div>
  );
}

export default App;
