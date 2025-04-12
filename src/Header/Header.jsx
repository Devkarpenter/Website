
// import React from 'react'
// import { FaFacebookF,FaTwitter,FaInstagram, FaYoutube } from "react-icons/fa";
// import { IoMenu } from "react-icons/io5";
// import './Header.css';

// function Header() {
//     {/* <button className="header-btn"><i><IoMenu /></i></button> */}
//   return (
     
//     <header className="header">
//       {/* <div className="container">
   
//         <div className="row">
//             <div className="head-icons">
//             <FaFacebookF />
//             <FaTwitter />
//             <FaInstagram />
//             <FaYoutube />
//             </div>
//             <div >
//                <div className="head-options">
//                 <div className="head-logo">
//                   <img src="src/assets/logo.png.webp" alt="" />
//                 </div>
//                 <div className="head-menu">
//                   <nav id='navbar'> 
//                   <ul>
//                       <li>HOME</li>
//                       <li>ABOUT</li>
//                       <li 
//                       // style={{marginInlineEnd:"100px"}}
//                       >SHOP</li>
//                       <li>PAGES</li>
//                       <li>NEWS</li>
//                       <li>CONTACT</li>
//                   </ul>
//                   </nav>
//                 </div> 
//                <div className="head-contact">9999999999</div>
                  
//               </div>
           
//             </div>
//         </div>
//       </div> */}


//       <div className="container border ">
//         <div className="row border ">
//           <div className="col-1 border ">
//             <div className="header-social border ">
//               <a href=""> <i><FaFacebookF/></i></a>
//               <a href=""> <i> <FaTwitter/> </i></a>
//               <a href=""> <i></i> <FaInstagram/></a>
//               <a href=""> <i><FaYoutube/></i></a>
//             </div>
//           </div>

//           {/* logo */}

          



//           <div className="col-2 border ">
//             <div className="header-options border ">
//             <div className="header-logo">
//                 <a href="">
//                 <img src="src/assets/logo.png.webp" alt="" />
//                 </a>
//           </div>
//               <div className="header-menu border ">
//                 <ul>
//                   <li className="action">
//                     <a href="">Home</a>
//                   </li>
//                   <li>
//                     <a href="">About</a>
//                   </li>
//                   <li>
//                     <a href="">Shop</a>
//                   </li>
//                   <li>
//                     <a href="">Pages</a>
//                   </li>
//                   <li>
//                     <a href="">News</a>
//                   </li>
//                   <li>
//                     <a href="">contact</a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="header-menu-num border ">1–688–688-94</div>

//             </div>
//           </div>
//         </div>
//       </div>










//     </header>
//   )
// }

// export default Header


import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="src/assets/logo.png.webp" alt="Logo" />
        </div>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Shop</a>
          <a href="#">Pages</a>
          <a href="#">News</a>
          <a href="#">Contact</a>

          <div className='nav-num'>1-688-688-96</div>
        </nav>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? '✖' : '☰'}
        </div>
      </div>
    </header>

  );

};

export default Header;

