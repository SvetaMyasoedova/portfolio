import { Link } from "react-router-dom";
import stylesButton from "./next-button.module.css";

export interface INextButton {
  text: string;
  to: string;
}

function NextButton({ text, to}: INextButton) {
  return (
    <div>
      <Link to={to} className={stylesButton.btn}>
        <span>{text}</span>
      </Link>
    </div>
  );
}

export default NextButton;
