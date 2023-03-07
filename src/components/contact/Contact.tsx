import contactStyles from "./contact.module.css";
import { contacts } from "../../data/contact";

function Contact() {
  return (
    <div className={contactStyles.main}>
		<div className={contactStyles.inner}>
			 <p><span> Contact  Me</span></p>
      <div className={contactStyles.icons}>
        {contacts.map((contact) => (
          <a href={contact.link} target="_blank" rel="noreferrer">
            <img src={contact.img} alt={contact.alt} />
          </a>
        ))}
      </div>
		</div>
     
    </div>
  );
}

export default Contact;
