import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../NavBar/NavBar";
import "./Author.css";
import snorlax from "../../images/snorlax.svg";
import linkedin from "../../images/linkedin.svg";
import github from "../../images/github.svg";

const Author = () => {
  return (
    <body className="author-body">
      <Navbar />
      <div className="profile-container">
        <h1>Diego Fernández Montesinos</h1>
        <p>This is my CV</p>
        <p>
          Full Stack web with more 3 years of experience in web design and
          creating web applications, I'm a skilled Software developer who is
          able to fix any issue about the frontend side. With a huge capacity to
          leadership a team and to achieve the goals of the company.
          <p>
            <li>
              Frontend skills: React, AngularJS, Angular, HTML, JavaScript,
              TypeScript, CSS, Sass, Redux, Figma, semantic-ui.
            </li>
            <li>
              Backend skills: Python, Oracle SQL, MySql, Linux, Microsoft,
              docker, Django.
            </li>
            <li>
              Fullstack skills: Git, Confluence, Jira, Data Bases, GitLab,
              gitHub, Sourcetree, Scrum Master.
            </li>
            <p>
              I am able to lead a dynamic team. I'm a quick learner and
              collaborate closely with clients to create efficient, scalable,
              and user-friendly solutions that solve real-world problems. Let's
              work together to bring your ideas to life! Do you want to see my
              portfolio? Oh, before I forget about it... I speak Italian,
              Spanish, English and French.
            </p>
          </p>
        </p>
        <div className="profile-links-container">
          <img src={linkedin} />
          <p>
            If you want to know more about me, go to my LinkedIn profile:
            <a href="https://www.linkedin.com/in/diego-fernandez-montesinos/">
              Click Here
            </a>
          </p>
        </div>
        <div className="profile-links-container">
          <img src={github} />
          <p>
            Do you want to see my portfolio? Let's go to GitHub:
            <a href="https://github.com/diegofernandezmontesinos">Click Here</a>
          </p>
        </div>
        <img src={snorlax} alt="snorlax" />
        <Link to="/home">Back to Home</Link>
      </div>
    </body>
  );
};

export default Author;
