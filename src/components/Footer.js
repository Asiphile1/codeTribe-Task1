import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section icons">
        <FaFacebook className="social-icon" />
        <FaInstagram className="social-icon" />
        <FaTwitter className="social-icon" />
      </div>
      <div className="footer-section arrows">
        <button className="arrow-btn">
          <FaArrowLeft />
        </button>
        <button className="arrow-btn">
          <FaArrowRight />
        </button>
      </div>
      <div className="footer-section text-boxes">
        <div className="text-box">Box 1</div>
        <div className="text-box">Box 2</div>
        <div className="text-box">Box 3</div>
      </div>
    </footer>
  );
}

export default Footer;


























// import React from 'react';
// import styled from 'styled-components';

// // Container for the footer section
// const FooterContainer = styled.footer`
//   display: flex;
//   justify-content: space-between;
 
//   background-color: ; 
//   margin-top: 20px;
//   gap:1000px;
  
  
// `;

// // Left section 
// const LeftSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 10px;
//   background-color: #ff7300;
  
// `;

// // Social links styling
// const SocialLinks = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   & > a {
//     text-decoration: none;
//     color: #000;
//     font-size: 40px;
//   }
// `;

// // Right section styling for text columns
// const RightSection = styled.div`
//   display: flex;
//   justify-content: center;
//   flex: 1;
//   background-color:white;
// `;

// // Text columns styling
// const TextColumn = styled.div`
//   flex: 1;
//   text-align: center;
//   padding: 10px;
// `;

// // Footer component
// const Footer = () => {
//   return (
//     <FooterContainer>
//       {/* Left section */}
//       <LeftSection>
//         <SocialLinks>
//           <a href="https://facebook.com" aria-label="Facebook">👍</a>
//           <a href="https://instagram.com" aria-label="Instagram">📸</a>
//           <a href="https://twitter.com" aria-label="Twitter">🐦</a>
//         </SocialLinks>
//       </LeftSection>
//       {/* Right section */}
//       <RightSection>
//         <TextColumn>
//           <p>01. Aiku Soft with new luxury finishes</p>
//         </TextColumn>
//         <TextColumn>
//           <p>02. Antonio Citterio's Jens for B&B Italia</p>
//         </TextColumn>
//         <TextColumn>
//           <p>03. 118 Herkner for Thonet Offenbach</p>
//         </TextColumn>
//       </RightSection>
//     </FooterContainer>
//   );
// };

// export default Footer;
