import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Intro from './Components/Intro';
import Works from './Components/Works';

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Works />
      <Aboutus />
      <Contactus />
      <Footer />
    </>
  );
}

export default App;
