import "../styles/home.css";
import React from "react";
import {socialLinks} from '../components/data'


const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Rohit</h2>
        <div className="prompt">
          <p>A software Developer with a passion for learning and creating.</p>
          {socialLinks.map(({ id, href, icon }) => {
            return (
              <a key={id} href={href}>
                {icon}
              </a>
            );
          })}
        </div>
        <div>
          <h3>
            Download
            <a href="/path/to/mycv.txt" download>
              my cv
            </a>
            please.
          </h3>
        </div>
      </div>

      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJS,VanillaJS,MaterialUI,tailwindCSS</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS,ExpressJS</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript,HTML5,CSS3,typeScript</span>
          </li>
        </ol>
        <br></br>
        <img
          className="giphy"
          src="https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=ecf05e47pm3fgmztys7vodxxgl0wt59mxza8dmaer11xvt8m&rid=giphy.gif&ct=g"
        />
      </div>
    </div>
  );
};

export default Home;
