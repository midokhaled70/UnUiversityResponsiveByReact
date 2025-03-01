import React, { useEffect, useState } from 'react';
import logo from '../../Assets/images/logo.png';
import './Navbar.css';
import { Link } from 'react-scroll';
import menu_img from '../../Assets/images/menu-icon.png'
export default function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [mobileMenu,setMobileMenu]=useState(false)
const toggleMenu=()=>{
mobileMenu ? setMobileMenu(false): setMobileMenu(true);
}
  return (
    <nav className={`${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={mobileMenu?'':'hide-mobile-menu' }>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="Programs" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonial
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-260} duration={500} className="btn2">
            Contact Us
          </Link>
        </li>
      </ul>
      <img src={menu_img} alt='' className='menu-img' onClick={toggleMenu}/>
    </nav>
  );
}
