

function Header() {
  return (
    <>
      <div className="flex justify-between">
        <div>
        <p>CIIRA | Portfolio</p>
      </div>

      <nav className="w-1/2">
        <div className="flex justify-evenly">
          <p>about</p> 
          <p>projects</p> 
          <p>contacts</p>
        </div>
      </nav>

      <div>
        <button>
          <p>
            hire me
          </p>
        </button>
      </div>
      </div>
    </>
  )
}

export default Header
