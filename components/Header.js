const headerStyle = {
  height: '60px',
  color: 'white',
  backgroundColor: 'rgb(0, 174, 239)'
}

export default function Header(props) {
  return (
    <div className="wrapper" style={headerStyle}>
      <div className="container toolbar">
        <h1>Welcome to Kitabisa Test</h1>
      </div>
      <style jsx>{`
        .toolbar {
          align-items: center;
          padding: 0 14px;
        }
      `}</style>
    </div>
  )
}