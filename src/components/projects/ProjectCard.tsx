import Carousel from "nuka-carousel";
import cardStyles from "./projectCard.module.css";

interface IInnerCard {
  images: JSX.Element[];
  title: string;
  text: string;
  skills: String[];
}

function ProjectCard({ images, title, text, skills }: IInnerCard) {
  return (
    <div className={cardStyles.main}>
      <div className={cardStyles.images}>
        <Carousel autoplay wrapAround>
          {images.map((image) => image)}
        </Carousel>
      </div>
      <div className={cardStyles.info}>
        <h3>{title}</h3>
        <div>{text}</div>
		  <div className={cardStyles.container}>
            {skills.map((skill) => (
              <p className={cardStyles.skill} >
                {skill}
              </p>
            ))}
          </div>
      </div>
    </div>
  );
}

export default ProjectCard;
