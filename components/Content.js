import Case1 from "./Case1"
import Case2 from "./Case2"
import Case3 from "./Case3"
import Case4 from "./Case4"

export default function Content(props) {
  return (
    <div className="wrapper">
      <div className="container content">
        {props.caseId === '1' && <Case1 />}
        {props.caseId === '2' && <Case2 />}
        {props.caseId === '3' && <Case3 />}
        {props.caseId === '4' && <Case4 />}
      </div>
      <style jsx>{`
        .content {
          min-height: calc(100vh - 60px);
          padding: 0 14px;
          background-color: white;
        }
      `}</style>
    </div>
  )
}