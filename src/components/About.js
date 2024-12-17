import React from 'react';

const About = () => {
  return (
    <div>
      <div className='titles bg-light'><h2>About Me</h2></div>
      <div className='about d-flex flex-column justify-content-center ' style={styles.about}>

        <div className='about-row row ' > 
          <img src='images/Myphoto6.jpg' alt='' height='350px' width='100%' className='col-md-3 rounded-circle' ></img>
          <div className='col-md-7 d-flex flex-column justify-content-end ' >
           <h5 className=''> Hii... Hello... I Am....</h5> 
            <h2 className='name text-center'>PaGaDaLa ChennAkesAvA</h2>
            <div className='d-flex flex-row justify-content-center'>
              <h4 className='role '>Python Developer ||</h4>
              <div className="marquee-container text-left" style={styles.marqu}>
                <div className="marquee-text ">
                  Web Technologies 
                  <hr></hr>
                  Data Analytics Enthusiast
                </div>
              </div>
              
            </div> 
            <h4 className='text-light'>
              "A passionate Python full-stack developer with good Knowledge in both front-end and back-end development,
              hands-on-Experience in frameworks like Django, dedicated to crafting robust, user-friendly web applications
              by leveraging my skills in python dvelopment, database management, and responsive design."
            </h4>
          </div>
        </div>
        <hr></hr>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-4'>
            <a href='chennakesava-pagadala.pdf' target='_blank' rel="noopener noreferrer" className='resume row' style={styles.resume}>
              <button className=' cv btn btn-sm btn-outline-light col-md-12 '> Jump To Cv / Resume </button>
            </a>
          </div>
        </div>
        
        

      </div>
    </div>
  );
};

const styles = {
  about: {
    // backgroundColor: '#f9f9f9',
    padding: '20px',
    marginLeft:'20px',
    marginRight:'20px',
    marginBottom:'20px',
    borderRadius : '5px',
    textAlign: 'center',
    minHeight: '573px',
  },
  aboutrow:{
    backgroundColor:'#81b29a',
  },
  marqu:{
    maxHeight:'30px',
    overflow: "hidden",
    width: "30%",
    whiteSpace: "nowrap",
  },
  resume:{
    textDecoration:'none',
  },
  
};

export default About;
