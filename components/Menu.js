import Link from 'next/link'

const menuStyle = {
  height: '60px',
  color: '#a8a8a8',
  position: 'fixed',
  bottom: 0
}

export default function Menu(props) {
  const activeMenu = (id) => {
    return (id === props.caseId) ? 'menuitem active' : 'menuitem'
  }
  return (
    <div className="wrapper" style={menuStyle}>
      <div className="container menubar">
        <Link href='/?case=1'>
          <a className={activeMenu('1')}>Case 1</a>
        </Link>
        <Link href='/?case=2'>
          <a className={activeMenu('2')}>Case 2</a>
        </Link>
        <Link href='/?case=3'>
          <a className={activeMenu('3')}>Case 3</a>
        </Link>
        <Link href='/?case=4'>
          <a className={activeMenu('4')}>Case 4</a>
        </Link>
      </div>
      <style jsx>{`
        .menubar {
          align-items: center;
          padding: 0 14px;
          justify-content: space-around;
          border-top: 1px solid #dedede;
          background-color: white;
        }
        .menuitem {
          width: 80px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a8a8a8;
          cursor: pointer;
          text-decoration: none;
        }
        .active {
          color: #00aaef;
        }
      `}</style>
    </div>
  )
}