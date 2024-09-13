import React from 'react';
import './Header.css';
import { FaHeart } from 'react-icons/fa';

function Header() {
  return (
    <header className="header-section">
      <div className="left-side">
        <img src="/public/downloaded-pic-1-removebg-preview.png" alt="chair" className="product-image" />
      </div>
      <div className="right-side">
        <h1>Shell chair</h1>
        <p>
          The Carl Hansen CHO7 Shell chair in Oiled Oak <br></br>is a sculptural easy chair with a <br></br>triangular footprint. Canaletto seat and 4 <br></br>spoke swivel base all in natural polished <br></br>Canaletto walnut fabric
        </p>
        <div className="shaded-boxes">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
        <p className="price">$735</p>
        <div className="action-buttons">
          <button className="add-to-cart">Add to Cart</button>
          <FaHeart className="heart-icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;





















// import React from 'react';
// import styled from 'styled-components';

// // Container for the header
// const HeaderContainer = styled.header`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: #fff;
//   padding: 40px;
//   text-align: center;
// `;

// // Title styling
// const Title = styled.h2`
//   margin: 0;
//   font-size: 48px;
//   color: #ffffff;
// `;

// // Header component
// const Header = () => {
//   return (
//     <HeaderContainer>
//       {/* Title */}
//       <Title>Shell Chair</Title>
//     </HeaderContainer>
//   );
// };

// export default Header;
