import skillsStyles from "./skills.module.css";

function Skills() {
  return (
    <div className={skillsStyles.container}>
      <p className={skillsStyles.text}>
        Hello! My name is Svetlana Myasoedova.
        <br />
        I'am a Front-end Developer.
      </p>
      <div className={skillsStyles.card}>
        <p className={skillsStyles.key}>Key skills</p>
        <div className={skillsStyles.list}>
          <div>
            <div>CSS, SCSS</div>
            <div>HTML</div>
            <div>JS</div>
          </div>
          <div>
            <div>React</div>
            <div>Redux</div>
            <div>TypeScript</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
