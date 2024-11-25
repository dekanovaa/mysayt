import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='container navbar_container'>
            <a className='navbar_link' href="#">About me</a>
            <a className='navbar_link' href="#">My skills</a>
            <a className='navbar_link' href="#">Portfolio</a>
            <a className='navbar_link' href="#">Contacts</a>
        </div>
    </div>
  )
}

export default Navbar