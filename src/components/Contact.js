import React, { useState } from "react";
import axios from "axios";


const Contact = () => {
  const whatsappNumber = '+918340001718'
  const message = 'Hey Hi'

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      setFormData({ name: "", email: "", message: "" });
      setStatus("");
      return window.confirm('Message sent successfully!')
    } catch (error) {
      setStatus("Failed to send the message. Please try again.");
    }
    
  };

  return (
    <div className="contact ">
      <div className="titles bg-light"><h2>Contact Me</h2></div>
      <div className="row d-flex justify-content-center">

        <div className=" col-md-2 d-flex justify-content-center mt-3 p-3">
          <a href="https://www.instagram.com/direct/t/107699440628476/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            <img src="images/insta1.png" alt=""  width='100%' className="bg-warning img-thumbnail"></img>
            <p className="bg-warning mt-2 rounded text-dark">Touch in Instagram</p>
          </a>
        </div>
        
        <form onSubmit={handleSubmit} className="contact-form col-md-6 ">
          <span className="text-danger bg-light form-control">Be in Touch With Me...</span>
          <input type="text" id="name" className="name form-control mt-2 " name="name" value={formData.name} onChange={handleChange} placeholder="Your Name Here..." autoComplete="off" required></input>
          <input type="email" id="email" className="email form-control mt-1" name="email" value={formData.email} onChange={handleChange}  placeholder="Your Email Here..." autoComplete="off" required></input>
          <textarea  type="text" id="message" className="message form-control mt-1" name="message" rows="4" cols="50" value={formData.message} onChange={handleChange}  placeholder="Message To me..." autoComplete="off" required></textarea>
          <input type="submit" id="submit" className="submit form-control btn btn-sm btn-warning mt-2 " name="submit" value="Send an Email"></input>

          {status && <p className="status-message">{status}</p>}
        </form>

        <div className=" col-md-2 d-flex justify-content-center mt-3 ">
          <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className="text-decoration-none ">
            <img src="images/what1.png" alt=""  width='100%' className="bg-warning img-thumbnail"></img>
            <p className="bg-warning mt-2 rounded text-dark">Touch in WhatsApp</p>
          </a>
        </div>

      </div> 

      <div className="row d-flex justify-content-center mt-5">
        <div className="col-md-3 ">
          <a href="https://www.linkedin.com/in/chennakesavap/" target="_blank" rel="noopener noreferrer" className="text-decoration-none bordered">
            <img src="images/linkedin.png" alt="" width='100%' className="linkedin-profile img-thumbnail bg-warning "></img>
            <p className="bg-warning mt-1 rounded text-dark">Connect in LinkedIn</p>
          </a>
        </div>
      </div>


    </div>
  );
};


export default Contact;


