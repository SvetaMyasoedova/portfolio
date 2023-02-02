import stylesAbout from "./about.module.css";
import Greeting from "../greeting/Greeting";
import NextButton from "../next-button/NextButton";
import Info from "../info/Info";

function About() {
  return (
    <div className={stylesAbout.main}>
      <Greeting>
        <div className={stylesAbout.text}>
          <p>
            Hello,
            <br />
            World
          </p>
        </div>
        <div>
          <NextButton text={"Projects"} to={"/"} />
        </div>
      </Greeting>
		<Info/>
    </div>
  );
}

export default About;
