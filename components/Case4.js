import { useState } from 'react';
import Input from "./Input";
import Result from './Result';
import { fibonacci } from './Fibonacci'

export default function Case4(props) {
  const [inputN, setInputN] = useState(0);
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const onChanged = (val) => {
    setInputN(Number(val))
  }
  const onClicked = () => {
    if (inputN < 0) {
      setResult('You must enter a value starting from 0 and 1')
    } else if (inputN === 0 || inputN === 1) {
      setResult(fibonacci(inputN)[0])
    } else {
      setResult(fibonacci(inputN).slice().join(', '))
    }
    setShowResult(true)
  }
  return (
    <div className="Case4">
      <h2>Find the first N Fibonacci sequence</h2>
      <Input name="inputN" label="N" inputVal={inputN} changed={(e) => onChanged(e)} />
      <Result clicked={onClicked} show={showResult} result={result} />
      <style jsx>{`
        .Case4 {
          width: 100%;
        }
      `}</style>
    </div>
  )
}