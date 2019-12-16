const layoutStyle = {
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column'
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      {props.children}
    </div>
  )
}