import React from 'react';
import { GlobalStyle, Container, GradientBackground } from './styles';
import Navbar from './components/Navbar';
import ChairCard from './ChairCard';
import Footer from './components/Footer';

// Main App component containing the structure of the page
const App = () => {
  return (
    <>
      {/* Global styles */}
      <GlobalStyle />
      <GradientBackground>
        <Container>
          {/* Navigation bar */}
          <Navbar />
          {/* Chair information card */}
          <ChairCard />
        </Container>
        {/* Footer section */}
        <Footer />
      </GradientBackground>
    </>
  );
}

export default App;



//import { GlobalStyle, Container, GradientBackground } from './styles';