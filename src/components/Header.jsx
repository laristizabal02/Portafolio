import React from 'react';
import Navigation from './NavTabs';
import './Header.css';

const Header = () => {
  return (
    <header className="bg-banner d-flex align-items-center text-white">
        <div className="container d-flex justify-content-between align-items-center">
        <h1 className="m-0">Laura Aristizabal Zuluaga</h1>
            <Navigation />
        </div>
    </header>
  );
};

export default Header;