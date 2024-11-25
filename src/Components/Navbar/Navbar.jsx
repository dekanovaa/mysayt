import { useEffect, useState } from 'react';
import './Navbar.css'

function Navbar() {
  
  const [navColor, setNavColor] = useState('transparent');

  const handleScroll = () => {

    if (window.scrollY > 50) {
      setNavColor('blue');
    

    } else {
      setNavColor('transparent')
     

    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
  
    };
  
  }, []);
  return (
    <div className={`navbar ${navColor === 'blue' ? 'navbar-blue' : 'navbar-transparent'}`}>
        <div className='container navbar_container'>
            <a className='navbar_link' href="#about">About me</a>
            <a className='navbar_link' href="#skills">My skills</a>
            <a className='navbar_link' href="#portfolio">Portfolio</a>
            <a className='navbar_link' href="#contact">Contacts</a>
        </div>
    </div>
  )
}

export default Navbar