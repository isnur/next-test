import { useState } from 'react';
import Input from "./Input";
import Result from './Result';
import { showPrime } from './Prime'

export default function Case3(props) {
  const [inputN, setInputN] = useState(0);
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const onChanged = (val) => {
    setInputN(Number(val))
  }
  const onClicked = () => {
    inputN < 1 ? setResult('You must enter a value greater than zero') : setResult(showPrime(inputN).slice().join(', '))
    setShowResult(true)
  }
  return (
    <div className="Case3">
      <h2>Find first N prime number</h2>
      <Input name="inputN" label="N" inputVal={inputN} changed={(e) => onChanged(e)} />
      <Result clicked={onClicked} show={showResult} result={result} />
      <style jsx>{`
        .Case3 {
          width: 100%;
        }
      `}</style>
    </div>
  )
}