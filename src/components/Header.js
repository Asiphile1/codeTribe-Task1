import React from 'react';
import styled from 'styled-components';

// Container for the header section
const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 40px;
  text-align: center;
`;

// Title styling
const Title = styled.h2`
  margin: 0;
  font-size: 48px;
  color: #ff7300;
`;

// Header component
const Header = () => {
  return (
    <HeaderContainer>
      {/* Title */}
      <Title>Shell chair</Title>
    </HeaderContainer>
  );
};

export default Header;
