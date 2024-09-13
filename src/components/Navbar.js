import React from 'react';
import './Navbar.css';
import { FaShoppingCart, FaSearch, FaBars } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-icon">🌟</span> {/* Replace with your icon */}
        <span className="navbar-text">CARL HANSEN & SON</span>
      </div>
      <div className="navbar-links">
        <a href="#link1">Home</a>
        <a href="#link2">About</a>
        <a href="#link3">Contact</a>
      </div>
      <div className="navbar-right">
        <FaShoppingCart className="icon" />
        <FaSearch className="icon" />
        <FaBars className="icon" />
      </div>
    </nav>
  );
}

export default Navbar;




















// import React from 'react';
// import styled from 'styled-components';

// // Container navigation bar
// const NavbarContainer = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 20px;
// `;

// // Logo styling
// const Logo = styled.h1`
//   font-size: 24px;
// `;

// // Navigation links
// const NavLinks = styled.ul`
//   list-style: none;
//   display: flex;
//   gap: 20px;

//   & > li {
//     cursor: pointer;
//   }
// `;

// // Emoji container
// const EmojiContainer = styled.div`
//   display: flex;
//   gap: 10px;
//   font-size: 24px;
// `;

// // Navigation bar component
// const Navbar = () => {
//   return (
//     <NavbarContainer>
//       {/* Logo */}
//       <Logo>Carl Hansen & Søn</Logo>
//       {/* Navigation links */}
//       <NavLinks>
//         <li>About</li>
//         <li>News</li>
//         <li>Collection</li>
//       </NavLinks>
//       {/* Emojis for basket and search */}
//       <EmojiContainer>
//         <span role="img" aria-label="search">🔍</span>
//         <span role="img" aria-label="basket">🛒</span>
//       </EmojiContainer>
//     </NavbarContainer>
//   );
// };

// export default Navbar;





// codeTribe-Task1