
import React from 'react';

const Education = () => {
  const educationHistory = [
    {
      degree: 'P.G in Master of Computer Applications',
      institution: 'Priyadarshini college of Engineering and Technology',
      year: 'June 2021 - Aug 2023',
      cgpa: '8.00 / 10',
      city:'Nellore, AP',
    },
    {
      degree: 'BSc in Mathematic, Computers',
      institution: 'Sri Biji Vemula Veera Reddy Degree and PG College',
      year: 'June 2018 - Aug 2021',
      cgpa: '7.65 / 10',
      city:'Badvel, AP',
    },
    {
      degree: 'Board of Intermediate Education A.P',
      institution: 'Gowtham Junior College',
      year: 'June 2016 - Aug 2018',
      cgpa: '9.3 / 10',
      city:'Badvel, AP',
    },
    {
      degree: 'Board of Secondary Education A.P',
      institution: 'ZP Boys High School',
      year: 'June 2015 - April 2016',
      cgpa: '8.7 / 10',
      city:'Badvel, AP',
    },
  ];

  return (
    <div className="">
      <div className='titles bg-light'><h2>EducAtion</h2></div>
      <div  className='education'>
        
        <div className='edu-row row d-flex justify-content-center' >
        {educationHistory.map((edu, index) => (
              <div className='edu_details col-sm-5 mr-3 mb-3' >
                <h3 className=''>{edu.institution}</h3> 
                <h4 className='text-light'>{edu.degree}</h4> <br></br>
                <h5>{edu.year}</h5>
                <h5 className=''>CGPA: {edu.cgpa}</h5>
                <h5 className='text-left text-light'>{edu.city}</h5>
              </div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default Education;
