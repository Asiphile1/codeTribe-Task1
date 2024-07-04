import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 40px;
  text-align: center;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 48px;
  color: #ff7300;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Shell chair</Title>
    </HeaderContainer>
  );
};

export default Header;
