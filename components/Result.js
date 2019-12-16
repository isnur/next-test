export default function Result(props) {
  return (
    <div className="Result">
      <button onClick={props.clicked}>Show Result</button>
      {props.show && <p>{props.result}</p>}
      <style jsx>{`
        .Result {
          margin-top: 25px;
        }
        p {
          text-align: center;
          font-size: 24px;
          font-weight: bold;
        }
        button {
          width: 100%;
          background-color: #00afef;
          color: white;
          font-size: 16px;
          font-weight: bold;
          text-transform: uppercase;
          padding: 10px;
          border-radius: 4px;
          border: none;
        }
      `}</style>
    </div>
  )
}