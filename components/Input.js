export default function Input(props) {
  const valChanged = (e) => {
    const val = e.target.value
    if (!isNaN(val)) {
      props.changed(Number(val))
    }
  }

  return (
    <div className="Input">
      <span>{props.label} :</span>
      <input type="text" value={props.inputVal} name={props.name} onChange={valChanged} />
      <style jsx>{`
        .Input {
          display: flex;
          align-items: center;
          position: relative;
          margin-bottom: ${props.marginBottom + 'px' || 0}
        }
        span {
          color: #333333;
          position: absolute;
          font-size: 1.5em;
          font-weight: 700;
          line-height: 1;
          padding-left: 15px;      
        }
        input {
          width: 100%;
          font-size: 24px;
          color: #4a4a4a;
          background-color: #f2f3f4;
          text-align: right;
          font-family: inherit;
          font-weight: 700;
          height: 50px;
          padding: 0 15px 0 50px;
          border-radius: 5px;
          border: none;
        }
        input:focus {
          outline: none;
        }
      `}</style>
    </div>
  )
}