import React from "react";
import styles from "./HeroStyle.module.css";
import profile from "../../assets/Profile.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={profile} alt="My Profile Picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Cyrel Jude
          <br />
          Barra
        </h1>
        <h2>Data Analyst</h2>
        <span>
          <a href="https://twitter.com/mizunate" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com/mizunate-tech" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/cj-barra-47316434b/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion to become a Data Analyst
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
