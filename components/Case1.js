import { useState } from 'react';
import Input from "./Input";
import Result from './Result';

export default function Case1(props) {
  const [inputX, setInputX] = useState(0);
  const [inputY, setInputY] = useState(0);
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const onChanged = (id, val) => {
    id === 'X' ? setInputX(Number(val)) : setInputY(Number(val))
  }
  const onClicked = () => {
    setResult(Number(inputX) + Number(inputY))
    setShowResult(true)
  }
  return (
    <div className="Case1">
      <h2>Sum X & Y</h2>
      <Input name="inputX" label="X" inputVal={inputX} changed={(e) => onChanged('X', e)} marginBottom="15" />
      <Input name="inputY" label="Y" inputVal={inputY} changed={(e) => onChanged('Y', e)} />
      <Result clicked={onClicked} show={showResult} result={result} />
      <style jsx>{`
        .Case1 {
          width: 100%;
        }
      `}</style>
    </div>
  )
}