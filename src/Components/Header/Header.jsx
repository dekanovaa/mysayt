import Navbar from '../Navbar/Navbar'
import './Header.css'
import header from '../../assets/fon2.mp4'
import cv from '../../assets/Dekanova Sevinch_CV.pdf'

function Header() {
  return (
    <div className='header'>\
    <video className="header__video" autoPlay loop muted>
        <source src={header} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div className='container header_container'>
          <Navbar/>
          <h1 className="header_title">
            Hi there! My name is Sevinch and I'm a <span>Front-end developer</span>
          </h1>
          <a href={cv} download="Dekanova_Sevinch_CV.pdf">
            <button className="header_btn">Download the CV</button>
           </a>
        </div>
    </div>
  )
}

export default Header