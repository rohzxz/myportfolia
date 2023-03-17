import "../styles/home.css";
import React from "react";
import { socialLinks } from "../components/data";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiMui,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiExpress,
} from "react-icons/si";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Rohit</h2>
        <div className="prompt">
          <p>A software Developer with a passion for learning and creating.</p>
          {socialLinks.map(({ id, href, icon }) => {
            return (
              <a className="icons" key={id} href={href}>
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
            <div className="icons-react">
              <FaReact size="2.3em" />
              <SiMui size="2.3em" />
            </div>
            <span>ReactJS,VanillaJS,MaterialUI</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <div>
              <FaNodeJs size="2em" />
              <SiExpress size="2em" />
            </div>
            <span>NodeJS,ExpressJS</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <div>
              <SiJavascript size="2em" />
              <SiHtml5 size="2em" />
              <SiCss3 size="2em" />
              <SiTypescript size="2em" />
            </div>
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
