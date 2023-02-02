 import greetingStyles from "./greeting.module.css";
 
 interface IGreeting {
  children: React.ReactNode;
}

function Greeting({ children }: IGreeting) {
  return (
  <div className={greetingStyles.about}>
  {children}
  </div>);
}

export default Greeting;
