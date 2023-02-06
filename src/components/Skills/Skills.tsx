import skillsStyles from "./skills.module.css";
import { skills } from "../../data/data";

import NextButton from "../next-button/NextButton";
import Greeting from "../greeting/Greeting";

function Skills() {
  return (
    <>
      <div className={skillsStyles.container}>
        <Greeting>
          <div className={skillsStyles.text}>
            <p>
              Hello!
              <br />
              My name is Svetlana Myasoedova.
              <br />
              I'am a Front-end Developer.
            </p>
          </div>
          <div>
            <NextButton text={"About me"} to={"/about"} />
          </div>
        </Greeting>

        <div className={skillsStyles.card}>
          <p className={skillsStyles.key}>Key skills</p>
          <div>
            <ul className={skillsStyles.skills}>
              <div>
                {skills.slice(0, 4).map((skill) => (
                  <li>
                    <img src={skill.src} alt={skill.src} />
                    <span>{skill.text}</span>
                  </li>
                ))}
              </div>
              <div>
                <div>
                  {skills.slice(4, 7).map((skill) => (
                    <li>
                      <img src={skill.src} alt={skill.src} />
                      <span>{skill.text}</span>
                    </li>
                  ))}
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
