import styled, { createGlobalStyle } from 'styled-components';

// Global styles for the entire application
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

// Gradient background to cover the entire page
export const GradientBackground = styled.div`
  background: linear-gradient(to bottom right, #ff7300, #ffffff);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// Container to center the content and set a maximum width
export const Container = styled.div`
  max-width: 100%;
  
  padding: 20px;
  flex: 1;
`;
