import skillsStyles from "./skills.module.css";
import htmlIcon from "../../images/html-5.png";
import cssIcon from "../../images/css.png";
import jsIcon from "../../images/js.png";
import tsIcon from "../../images/typescript.png";
import reactIcon from "../../images/react.png";
import reduxIcon from "../../images/redux.png";
import gitIcon from "../../images/github.png";

import NextButton from "../next-button/NextButton";

function Skills() {
  return (
    <>
      <div className={skillsStyles.container}>
        <div className={skillsStyles.about}>
          <p className={skillsStyles.text}>
          Hello! 
          <br />
          My name is Svetlana Myasoedova.
          <br />
          I'am a Front-end Developer.
        </p>
        <div className={skillsStyles.button}>
         <NextButton text={"About me"} to={"/about"} />
      </div>
        </div>
        
        <div className={skillsStyles.card}>
          <p className={skillsStyles.key}>Key skills</p>
          <div>
            <ul className={skillsStyles.skills}>
              <div>
                <li>
                  <img src={htmlIcon} alt="Html" />
                  <span>HTML</span>
                </li>
                <li>
                  <img src={cssIcon} alt="CSS" />
                  <span>CSS</span>
                </li>
                <li>
                  <img src={jsIcon} alt="JavaScript" />
                  <span>JavaScript</span>
                </li>
                <li>
                  <img src={tsIcon} alt="TypeScript" />
                  <span>TypeScript</span>
                </li>
              </div>
              <div>
                <li>
                  <img src={reactIcon} alt="React" />
                  <span>React</span>
                </li>
                <li>
                  <img src={reduxIcon} alt="Redux" />
                  <span>Redux</span>
                </li>
                <li>
                  <img src={gitIcon} alt="Git" />
                  <span>Git</span>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      
     
    </>
  );
}

export default Skills;
