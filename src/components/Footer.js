import React from 'react';
import styled from 'styled-components';

// Container for the footer section
const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color:  ; 
  margin-top: 20px;
`;

// Left section styling for social links
const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

// Social links styling
const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > a {
    text-decoration: none;
    color: #000;
    font-size: px;
  }
`;

// Right section styling for text columns
const RightSection = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

// Text columns styling
const TextColumn = styled.div`
  flex: 1;
  text-align: center;
  padding: 0 10px;
`;

// Footer component
const Footer = () => {
  return (
    <FooterContainer>
      {/* Left section with social media links */}
      <LeftSection>
        <SocialLinks>
          <a href="https://facebook.com" aria-label="Facebook">👍</a>
          <a href="https://instagram.com" aria-label="Instagram">📸</a>
          <a href="https://twitter.com" aria-label="Twitter">🐦</a>
        </SocialLinks>
      </LeftSection>
      {/* Right section with text columns */}
      <RightSection>
        <TextColumn>
          <p>01. Aiku Soft with new luxury finishes</p>
        </TextColumn>
        <TextColumn>
          <p>02. Antonio Citterio's Jens for B&B Italia</p>
        </TextColumn>
        <TextColumn>
          <p>03. 118 Herkner for Thonet Offenbach</p>
        </TextColumn>
      </RightSection>
    </FooterContainer>
  );
};

export default Footer;
