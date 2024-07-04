import React from 'react';
import styled from 'styled-components';

// Container for the navigation bar
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

// Logo styling
const Logo = styled.h1`
  font-size: 24px;
`;

// Navigation links styling
const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;

  & > li {
    cursor: pointer;
  }
`;

// Emoji container styling
const EmojiContainer = styled.div`
  display: flex;
  gap: 10px;
  font-size: 24px;
`;

// Navigation bar component
const Navbar = () => {
  return (
    <NavbarContainer>
      {/* Logo */}
      <Logo>Carl Hansen & Søn</Logo>
      {/* Navigation links */}
      <NavLinks>
        <li>About</li>
        <li>News</li>
        <li>Collection</li>
      </NavLinks>
      {/* Emojis for basket and search */}
      <EmojiContainer>
        <span role="img" aria-label="search">🔍</span>
        <span role="img" aria-label="basket">🛒</span>
      </EmojiContainer>
    </NavbarContainer>
  );
};

export default Navbar;
