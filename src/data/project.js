//burger
import feeds from "../images/feeds.png";
import ingredientDetails from "../images/ingredient_details.png";
import login from "../images/login.png";
import mainPage from "../images/main_page.png";
import modal from "../images/modal.png";
import order from "../images/order.png";
import register from "../images/register.png";

//library
import add from "../images/add.png";
import cards from "../images/cards.png";
import library from "../images/library.png";

export const projects = [
  {
    id: 1,
    title: "LOrem ipsum",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    skills: [
      "Javascript",
      "Typescript",
      "React",
      "Redux",
      "React hooks",
      "React-dnd",
      "React-dom-router",
      "Web-socket",
      "Jest",
      "Cypress",
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
  {
    id: 2,
    title: "LOrem ipsum",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    skills: [
      "Javascript",
      "Local Storage",
      "CSS"

    ],
    images: [
      <img src={library} alt="the main library page" />,
      <img src={add} alt="add modal" />,
      <img src={cards} alt="cards with books" />,
      
    ],
  },
];
