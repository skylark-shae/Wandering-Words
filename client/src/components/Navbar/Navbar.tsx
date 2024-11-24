import React from 'react';
import './Navbar.css;
import {BiHome, BiUser, BiCodeCurly, BiSolidBook, BiMessageSquareDetail} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {Link} from 'react-scroll';
// import { Link } from 'react-router-dom'; // From original code.

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <Link to='home' smooth={true} duration={500} spy={true} exact='true' offset={-80} className='navbar__logo'>
          <BiHome className='navbar__icon' />
          Home
        </Link>
        <ul className='navbar__menu'>
          <li className='navbar__item'>
            <Link to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80} className='navbar__links'>
              <BiUser className='navbar__icon' />
              About
            </Link>
          </li>
          <li className='navbar__item'>
            <Link to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80} className='navbar__links'>
              <RiServiceLine className='navbar__icon' />
              Services
            </Link>
          </li>
          <li className='navbar__item'>
            <Link to='skills' smooth={true} duration={500} spy={true} exact='true' offset={-80} className='navbar__links'>
              <BiCodeCurly className='navbar__icon' />
              Skills
            </Link>
          </li>
          <li className='navbar__item'>
            <Link to='projects' smooth={true} duration={500} spy={true} exact='true' offset={-80} className='navbar__links'>
              <BiSolidBook className='navbar__icon' />
              Projects
            </Link>
          </li>
          <li className='navbar__item'>
            <Link to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80} className='navbar__links'>
              <BiMessageSquareDetail className='navbar__icon' />
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

// Original code:
// const Navbar = () => {
//   return (
//     <section className='top'>
//       <header className='bg-primary text-light mb-4 py-3 flex-row align-center'>
//         <div className='container flex-row justify-space-between-lg justify-center align-center'>
//           <h1 className='m-0'>UI/UX Tips</h1>
//           <p className='m-0'>Get practical advice from other developers.</p>
//           <Link to='/feedback' className='m-0'>
//             Submit Feedback
//           </Link>
//         </div>
//       </header>
//     </section>
//   );
// };

// export default Navbar;
