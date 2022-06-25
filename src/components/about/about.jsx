import React from "react";
import "./about.css";

function About() {
  return (
    <>


      <section className="body">
        <div className="image">
          <img src="https://cdn.pixabay.com/photo/2017/08/26/23/37/business-2684758__340.png" alt="devloper-illustration" />
        </div>

        <div className="content">
          <h2>Ganesh Rathor</h2>
          <span></span>
          <p>Hello there! Before talking about qualifications and professional abilities, I would like to introduce myself.

            I am Ganesh Rathor and I am from India. Taking web development as a profession not only fulfils my pocket but also my heart because it has been my passion since my early teenage.

            I believe that people should do things in which they are good at or in which their heart lays.</p>
          <ul className="category">
            <h3>Skills</h3>
            <li>Frontend Developer <span className="stars">
              <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i>
            </span></li>
            <li>Backend Developer <span className="stars">
              <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></span>
              </li>
              
            <li>Website Desginer
              <span className="stars">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </span>
            </li>
            <li>Website Security
              <span className="stars">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </span>
            </li>
            <li>Database
              <span className="stars">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </span>
            </li>
            <li>Hacking
              <span className="stars">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </span>
            </li>
          </ul>
          <ul className="category">
            <h3>Hobbies</h3>
            <li>Reading selfHelp books</li>
            <li>Coding && Programming</li>
            <li>Spent Time with Nature and Animals</li>
          </ul>

          <ul className="category">
            <h3>Qulifications</h3>
            <li>11th Pass (Agriculture)</li>
            <li>Udemy Certified (Fullstack)</li>
            <li>HakerRank 4 star coder</li>
          </ul>

          <ul className="icons">
            <li>
              <i className="fa fa-twitter"></i>
            </li>
            <li>
              <i className="fa fa-facebook"></i>
            </li>
            <li>
              <i className="fa fa-github"></i>
            </li>
            <li>
              <i className="fa fa-pinterest"></i>
            </li>
          </ul>
        </div>
      </section><br /><br />
      <div className="credit">Made with <span >❤</span> by <a href="https://www.learningrobo.com/">Learning Robo</a></div>


    </>
  )
}

export default About;
