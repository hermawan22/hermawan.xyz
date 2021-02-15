import React, { useEffect, useState } from "react";
import Bot from "../../components/bot";
import Command from "../../components/command";
import styles from "./styles.module.css";

const LandingView = () => {
  const renderDefault = () => {
    return (
      <div>
        <div>Welcome to my page.</div>
        <div>
          Please type{" "}
          <b>
            <i>help</i>
          </b>{" "}
          to show list of command 🚀
        </div>
      </div>
    );
  };

  const defaultContent = { content: renderDefault() };
  const [command, setCommand] = useState("");
  const [bot, setBot] = useState([defaultContent]);

  useEffect(() => {
    switch (command) {
      case "help":
        return setBot((prevState) => [...prevState, { content: renderHelp() }]);
      case "about":
        return setBot((prevState) => [
          ...prevState,
          { content: renderAboutMe() },
        ]);
      case "resume":
        return setBot((prevState) => [
          ...prevState,
          { content: renderResume() },
        ]);
      case "works":
        return setBot((prevState) => [
          ...prevState,
          { content: renderPortfolio() },
        ]);
      case "blog":
        return setBot((prevState) => [...prevState, { content: renderBlog() }]);
      case "clear":
        return setBot([defaultContent]);
      default:
        return null;
    }
  }, [command]);

  const renderPortfolio = () => {
    return (
      <div>
        <h1>What i've worked so far..</h1>

        <p>Coming soon ... 👨‍💻</p>
      </div>
    );
  };

  const renderAboutMe = () => {
    return (
      <div style={{ textAlign: 'left'}}>
        <div>my name is Hermawan, just call me Nino! 😁</div>
        <div>
          This is my email address, in case you need it :{" "}
          <b>hermawan.remote@gmail.com</b>
        </div>
        <div>
          This is my{" "}
          <a href="https://github.com/hermawan22" target="_blank">
            <b>github</b>
          </a>
        </div>
      </div>
    );
  };

  const renderHelp = () => {
    return (
      <div>
        <ul style={{ textAlign: "left" }}>
          <li>
            <b>
              <i>help</i>
            </b> {" "}
            : to show list of command ℹ️
          </li>
          <li>
            <b>
              <i>about</i>
            </b> {" "}
            : to see who is i am 😎
          </li>
          <li>
            <b>
              <i>resume</i>
            </b> {" "}
            : to download my resume 📖
          </li>
          <li>
            <b>
              <i>works</i>
            </b> {" "}
            : to show what i've done so far 👨‍💻
          </li>
          <li>
            <b>
              <i>blog</i>
            </b> {" "}
            : to show what i've wrote so far ✍️
          </li>
          <li>
            <b>
              <i>clear</i>
            </b> {" "}
            : to clear chat box 🧹
          </li>
        </ul>
      </div>
    );
  };

  const renderBlog = () => {
    return (
      <div>
        <h1> Blog </h1>
        <p>Coming soon... 👨‍💻</p>
      </div>
    );
  };

  const renderResume = () => {
    return (
      <div>
        <h1> Resume </h1>
        <p>Coming soon... 👨‍💻</p>
      </div>
    );
  };

  const renderBot = () => {
    return bot.map((value, i) => {
      return <Bot key={i} content={value.content} />;
    });
  };

  return (
    <>
      <div id="views" className={styles.wrapper}>
        {renderBot()}
      </div>

      <Command command={command} setCommand={setCommand} />
    </>
  );
};

export default LandingView;
