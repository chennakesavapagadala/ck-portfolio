import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Header />
      
      <div className='container-fluid'>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Education Section */}
        <section id="education">
          <Education />
        </section>

        {/* Skills Section */}
        <section id="skills">
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>

      </div>
      {/* Footer */}
      <Footer />

    </div>
    
  );
}

export default App;

