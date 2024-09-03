// src/App.js
import React, { useState } from 'react';
import ContentOne from './components/ContentOne';
import ContentTwo from './components/ContentTwo';
import ContentThree from './components/ContentThree';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('One');

  const renderContent = () => {
    switch (activePage) {
      case 'One':
        return <ContentOne />;
      case 'Two':
        return <ContentTwo />;
      case 'Three':
        return <ContentThree />;
      default:
        return <ContentOne />;
    }
  };

  return (
    <div className="App">
      
      <div><Navbar setActivePage={setActivePage} /></div>
      <main>{renderContent()}</main>
      <Footer />
    </div>
  );
}

export default App;

