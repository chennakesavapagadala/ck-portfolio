import React from 'react';

const Header = () => {
  return (
    <header id='header'  className="header row d-flex justify-content-center p-2 text-wrap">
      <div className='col-md-1'><img className='Mylogo' src='logos/cklogo6.png' alt='Logo' height='30' width='30'></img></div>
      <nav className='col-md-11'>
        <a href="#about" >About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};




export default Header;
