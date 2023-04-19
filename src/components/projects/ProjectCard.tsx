import Carousel from "nuka-carousel";
import cardStyles from "./projectCard.module.css";
import gitIcon from "../../images/github.png";

interface IInnerCard {
  images: JSX.Element[];
  title: string;
  text: string;
  skills: String[];
  gitHub?: string;
  link?: string;
}

function ProjectCard({
  images,
  title,
  text,
  skills,
  gitHub,
  link,
}: IInnerCard) {
  return (
    <div className={cardStyles.main}>
      <div className={cardStyles.images}>
        <Carousel autoplay wrapAround>
          {images.map((image) => image)}
        </Carousel>
      </div>
      <div className={cardStyles.info}>
        <h2>{title}</h2>
        <div className={cardStyles.text}>{text}</div>
        {link ? (
          <div>
            <a className={cardStyles.link} href={link} target="_blank">
              Сlick here to see
            </a>
          </div>
        ) : null}

        <div className={cardStyles.container}>
          {skills.map((skill) => (
            <p className={cardStyles.skill}>{skill}</p>
          ))}
        </div>

        {gitHub ? (
          <a href={gitHub} target="_blank">
            <img className={cardStyles.git} src={gitIcon} alt="gitHub icon" />
          </a>
        ) : (<p></p>)}
      </div>
    </div>
  );
}

export default ProjectCard;
