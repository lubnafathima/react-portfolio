import React from "react";
import ReactDOM from "react-dom";
import PhotoImg from "./photo.jpg";
import EmailLogo from "./email.png";

const Main = () => {
  return (
    <main className="main">
      <section className="section">
        <h2 className="title">Welcome to the official website of</h2>
        <div className="header">
          <h1 className="userName">Lubna N</h1>
          <img src={PhotoImg} alt="lubna fathima logo" className="user_logo" />
          <p>
            Frontend SDE @
            <a href="https://sensegrass.com/" target="_blank" className="link">
              sensegrass
            </a>
            with around 1 year of experience in tech.
          </p>
          <p>
            Expertise in Next Js, React Js, JavaScript, Bootstarp and Tailwind
            CSS. Passionate frontend developer.
          </p>
          <h3 className="download">
            <a
              href="https://drive.google.com/file/d/1pEwstvdbKO41akzxK_Cafv5DZN4CweAE/view?usp=sharing"
              target="_blank" className="link"
            >
              DOWNLOAD MY RESUME
            </a>
          </h3>
          <p>
            <i>This website is UNDER CONSTRUCTION. Please come back soon. </i>
          </p>
        </div>
        <div className="mail_container">
          <img src={EmailLogo} alt="email logo" className="emailLogo" />
          <a href="mailto:lubnafathima275@gmail.com" className="email_text">SEND ME AN EMAIL</a>
          <img src={EmailLogo} alt="email logo" className="emailLogo" />
        </div>
      </section>
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
