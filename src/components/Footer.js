import React from 'react';

const Footer = () => {
  
  return (
    <footer style={style.footer}>
      <p>&copy; {new Date().getFullYear()} Chennakesava Pagadala. All rights reserved.</p>
    </footer>
  );
};

const style = {
  footer:{
    backgroundColor: '#dcdcdd',
    padding: '4px',
    
  }
}
export default Footer;
