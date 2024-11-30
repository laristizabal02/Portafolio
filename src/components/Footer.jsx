import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <section className="bg-light-purple py-5 text-center">
      <p>Made by Laura Aristizabal.</p>
      <div className="emoji-links mt-3">
         
          <a 
            href="https://github.com/laristizabal02/Portafolio" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="emoji-link"
          >
            💼
          </a>
          <a 
            href="https://www.linkedin.com/in/laura-aristizabal-zuluaga-20763733a/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="emoji-link"
          >
            🌐
          </a>

          
        </div>
      </section>
    </footer>
  );
};

export default Footer;