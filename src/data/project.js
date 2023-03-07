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

//tic tac toe
import ticTacToe from "../images/tic_tac_toe.png";
import win from "../images/win.png";
import tie from "../images/tie.png";

//corona
import corona from "../images/corona.png";
import app from "../images/app.png";
import facts from "../images/facts.png";
import appDownload from "../images/app_download.png";

export const projects = [
  {
    id: 1,
    title: "Stellar burgers (study project)",
    text: "Space burger web application with the following functionality: main page, personal account and order feed. The application uses authorization and a Web - socket. The application was developed as part of the React Developer course by Yandex.",
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
    gitHub: "https://github.com/SvetaMyasoedova/react-burger",
  },
  {
    id: 2,
    title: "Library",
    text: "Library app can take user’s input about books and  display them in card. The form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read. The Library  also uses Local Storage to save the result.",
    skills: ["Javascript", "Local Storage", "CSS"],
    images: [
      <img src={library} alt="the main library page " />,
      <img src={add} alt="add modal " />,
      <img src={cards} alt="cards with books" />,
    ],
    gitHub: "https://github.com/SvetaMyasoedova/project-library",
  },
  {
    id: 3,
    title: "Tic Tac Toe",
    text: "This is the well-known game Tic Tac Toe. I use JS function that allow players to add marks to a specific spot on the board and keep players from playing in spots that are already taken. The game checks for when the game is over: check for 3-in-a-row and a tie.",
    skills: ["Javascript", "CSS", "HTML"],
    images: [
      <img src={ticTacToe} alt="the main Tic Tac Toe page" />,
      <img src={win} alt="the win situation" />,
      <img src={tie} alt="It's a tie!" />,
    ],
    gitHub: "https://github.com/SvetaMyasoedova/tic-tac-toe",
  },
  {
    id: 4,
    title: "GoCorona",
    text: "Simple responsive website. I used this free design to learn how to layout and make responsive websites. Also SCSS is actively used here.",
    skills: ["HTML", "SCSS"],
    images: [
      <img src={corona} alt="the main Corons page" />,
      <img src={app} alt="about app" />,
      <img src={facts} alt="facts about Corona" />,
      <img src={appDownload} alt="app download" />,
    ],
    gitHub: "https://github.com/SvetaMyasoedova/scss-web-gocorona",
  },
];
