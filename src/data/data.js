//skills
import htmlIcon from "../images/html-5.png";
import cssIcon from "../images/css.png";
import jsIcon from "../images/js.png";
import tsIcon from "../images/typescript.png";
import reactIcon from "../images/react.png";
import reduxIcon from "../images/redux.png";
import gitIcon from "../images/github.png";

//projects
import feeds from "../images/feeds.png";
import ingredientDetails from "../images/ingredient_details.png";
import login from "../images/login.png";
import mainPage from "../images/main_page.png";
import modal from "../images/modal.png";
import order from "../images/order.png";
import register from "../images/register.png";

export const skills = [
  {
    id: 1,
    text: "HTML",
    src: htmlIcon,
    alt: "HTML",
  },
  { id: 2, text: "CSS", src: cssIcon, alt: "CSS" },
  { id: 3, text: "JavaScript", src: jsIcon, alt: "JavaScript" },
  { id: 4, text: "TypeScript", src: tsIcon, alt: "TypeScript" },
  { id: 5, text: "React", src: reactIcon, alt: "React" },
  { id: 6, text: "Redux", src: reduxIcon, alt: "Redux" },
  { id: 7, text: "Git", src: gitIcon, alt: "Git" },
];

export const projects = [
  {
    id: 1,
    title: "LOrem ipsum",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    skills: [
      'Javascript',
      'Typescript',
      'React',
      'Redux',
      'React hooks',
      'React-dnd',
      'React-dom-router',
      'Web-socket',
      'Jest',
      'Cypress',
    ],
    images: [
      <img src={mainPage} alt="the main page" />,
      <img src={order} alt="order" />,
      <img src={modal} alt="modal" />,
      <img src={ingredientDetails} alt="ingredient's details" />,
      <img src={feeds} alt="the feeds page" />,
      <img src={register} alt="register page" />,
      <img src={login} alt="login page" />,
    ],
  },
];
