import React from 'react';
import { GlobalStyle, Container } from './styles';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ChairCard from './ChairCard';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Navbar />
        <Header />
        <ChairCard />
        <Footer />
      </Container>
    </>
  );
}

export default App;
