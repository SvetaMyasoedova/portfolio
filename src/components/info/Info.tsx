import stylesInfo from "./info.module.css";
import avatar from "../../images/avatar.jpg";
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
        <p className={stylesInfo.info}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
          saepe est fugiat neque laborum laudantium ea ullam aliquid
        </p>
      )}
    </div>
  );
}

export default Info;
