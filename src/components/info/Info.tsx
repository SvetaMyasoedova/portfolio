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
            <img className={stylesInfo.project} src={project} alt="My first project" />
            <p>
              But now I can make more complex sites and use different
              technologies
            </p>
            <p>
              I have gone through a really exciting journey. And I'm still on
              the road. At the beginning, I could only add a button to a page
              and make it colored. And it was 'wow'.
            </p>
            <p>
              But then JavaScript came to me... and my color button could do
              something else. JavaScript is my first programming language. I
              know it's not perfect. But JavaScript is a really interesting
              language with its pros and cons. I solved more than 150 Сodewars
              tasks to understand this in practice.
            </p>
            <a
              target="_blank"
              href="https://www.codewars.com/users/SvetaMyasoedova"
            >
              <img src={codewarsBadge} alt="codewars badge" />
            </a>
            <p>
              A whisper was heard from behind the door: "your applications should
              be declarative and component-based". It was React. It gave me three
              magic words: 'Create React App'. To understand what to do after
              these three magic words, I decided to take a course. And I
              completed the React Developer Professional Training Course at
              Practicum by Yandex.
            </p>
            <p>
              And now I'm here. I am writing this funny mini story and dreaming
              about real team work. I know this story doesn't tell much about
              me, but you can check out my projects and my git. I'm still on the
              road. But I want to grow as a front-end developer and work. I
              would be happy to be part of your team!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Info;
