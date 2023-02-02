import stylesInfo from "./info.module.css";
import avatar from "../../images/avatar.jpg";
import project from "../../images/first_project.png";
import codewarsBadge from "../../images/codewars.svg";
import { useEffect, useState } from "react";

function Info() {
  const [isAvatar, changeAvatarStatus] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      changeAvatarStatus(false);
    }, 2000);
  }, []);
  return (
    <div className={stylesInfo.main}>
      {isAvatar ? (
        <img className={stylesInfo.avatar} src={avatar} alt="Avatar" />
      ) : (
        <div className={stylesInfo.scroll}>
          <div className={stylesInfo.info}>
            <p>7 months ago I could make a site like this using only HTML</p>
            <img src={project} alt="My first project" />
            <p>
              But now I can make more complex sites and use different
              technologies
            </p>
            <p>
              I have gone through a really exciting journey. And I'm still on
              the road. At the beginning, I could only add a button to a page
              and make it colored. And it was wow. I really like JavaScript. I
              solved more than 150 Сodewars tasks to understand this in
              practice.
            </p>
           <a target="_blank" href="https://www.codewars.com/users/SvetaMyasoedova"><img src={codewarsBadge} alt="codewars badge" /></a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Info;
