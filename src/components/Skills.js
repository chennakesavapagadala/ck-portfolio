// src/components/Skills.js
import React from 'react';

const Skills = () => {
  const Tskills = [
    { name: 'Python', level: '80%' },
    { name: 'Django', level: '60%' },
    { name: 'MySql/sql', level: '70%' },
    { name: 'HTML/CSS', level: '80%' },
    { name: 'JavaScript', level: '60%' },
    { name: 'React.js', level: '40%' },
    { name: 'Power BI', level: '70%' },
    { name: 'Excel', level: '60%' },
    { name: 'Git', level: '70%' },
  ];
  const Pskills = [
    { name: 'Team-Collabarative' },
    { name: 'Attention-to-Detail'},
    { name: 'Analytical-Thinking'},
    { name: 'Communication' },
    { name: 'Prblem-solving'},
    { name: 'Data Analysis'},
    { name: 'Adaptability'},
    { name: 'Web Scraping'},
    { name: 'Creativity'},

  ];

  return (
    <div className="">
      <div className='titles bg-light'><h2>Skills</h2></div>
      <div className='skills'>
        
        <h5 className='skill-title'>Technical Skills</h5> 
        <div className='t-row row d-flex justify-content-center '> &nbsp; &nbsp;
            {Tskills.map((skill, index) => (
              <div className="tskill col-md-4">
                <span className="tskill-name text-left">{skill.name} - {skill.level} </span> 
                  <div className="t-progress-bar ">
                      <div className="t-progress bg-warning" style={{ width: `${skill.level}` }}></div>
                  </div>
              </div> 
              ))}
        </div> <br></br>
        <h5 className='skill-title'>Proffessional Skills</h5> 
        <div className='p-row row d-flex justify-content-center '>&nbsp; &nbsp;
          {Pskills.map((skill, index) => (
            <div className="pskill col-md-3 ">
              <h6 className="pskill-name   bg-warning ">{skill.name}</h6> 
                
            </div> 
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skills;



