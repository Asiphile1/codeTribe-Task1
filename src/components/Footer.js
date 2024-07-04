import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #fff;
  margin-top: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;

  & > a {
    text-decoration: none;
    color: #000;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>01. Aiku Soft with new luxury finishes</p>
      <p>02. Antonio Citterio's Jens for B&B Italia</p>
      <p>03. 118 Herkner for Thonet Offenbach</p>
      <SocialLinks>
        <a href="https://facebook.com">Facebook</a>
        <a href="https://instagram.com">Instagram</a>
        <a href="https://twitter.com">Twitter</a>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;
