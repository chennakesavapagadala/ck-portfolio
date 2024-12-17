import React from 'react';

const Projects = () => {
  const projectData = [
    {
      title: 'College Information and Analytics Platform(Bharath-Vidhya)',
      description: `
        Designed and implemented a web-based platform to provide comprehensive insights into engineering colleges in India.
        Utilized Python and Django for backend development, ensuring efficient database management and API integration.
        Built dynamic and interactive front-end interfaces using HTML, CSS and JavaScript.
        Deployed the application on a cloud server for scalability and real-time analytics capabilities
                  `,
      techStack: 'Python Pandas, Matplotlib, BeatifulSoupbs4, Folium etc..,',
      link: 'https://github.com/chennakesavapagadala/bharath-vidhya',
      live : '',
    },
    {
      title: 'Mouse Cursor Control Application',
      description: `
        Developed a Python-based program to control the mouse cursor using hand gestures detected through a webcam.
        Implemented OpenCV and Mediapipe libraries for hand-tracking and gesture recognition.
        Integrated PyAutoGUI for simulating mouse actions like clicking, scrolling, and dragging.
        Enhanced the program’s usability with smooth gesture interpretation and minimal latency. {AAAAAAAAAAAAAA}
      `,
      techStack: 'Python OpenCV, MediaPipe, PyAutoGUI...',
      link: 'https://github.com/chennakesavapagadala/cursor-control-application',
    },
    {
      title: 'Personal Portfolio Website(ck-portfolio)',
      description: `
        The CK-Portfolio is a modern and responsive personal portfolio website designed to showcase your skills, projects,
        and achievements in an elegant and professional manner. Built with cutting-edge technologies like React.js and Node.js, 
        this portfolio serves as a digital resume and a central hub for connecting with potential clients, employers, or collaborators.
      `,
      techStack: 'React.js, Node.js, JavaScript, HTML, CSS, BootStrap ',
      link: 'https://github.com/chennakesavapagadala/ck-portfolio',
    },
    {
      title: 'Student Result Management System ',
      description: `
        The Student Result Management System is a robust and user-friendly application designed to streamline the process of
        managing student information and academic results. Built with Python, Tkinter, and MySQL, this system provides 
        a comprehensive platform for educational institutions to efficiently handle student records and performance tracking.
      `,
      techStack: 'Python, Django, MySQL, HTML, CSS, BootStrap ',
      link: 'https://github.com/chennakesavapagadala/student-results-management-system ',
    },
  ];

  return (
    <div>
      <div className="titles bg-light"><h2>Projects</h2> </div>
      <div className="row project d-flex justify-content-center">
        {projectData.map((project,index) =>(
          <div className='proj-details col-md-5 mb-2 mr-2' >
            <h4 className='proj-title' >{project.title}</h4>
            <p className='proj-desc'>{project.description}</p>
            <p className=''><strong>Tech Stack:</strong> {project.techStack}</p>
            <hr></hr>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className='text-light mr-3 bg-primary btn btn-sm '>
              View on GitHub
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" className='text-dark ml-3 bg-warning btn btn-sm'>
              View on Live
            </a>
          </div>
        )
        )}
        <a href='https://github.com/chennakesavapagadala/' target='_blank' rel="noopener noreferrer" className='col-md-2 text-decoration-none bg-warning text-dark'>
          More Projects....
        </a>
      </div>
    </div>
  );
};



export default Projects;

