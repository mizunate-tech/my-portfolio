import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <h2>Data Analysis</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="SQL" />
        <SkillList src={checkMarkIcon} skill="Excel" />
        <SkillList src={checkMarkIcon} skill="PowerBI" />
        <SkillList src={checkMarkIcon} skill="Python" />
      </div>
      <hr />
      <h2>Programming</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="C#" />
        <SkillList src={checkMarkIcon} skill=".NET Framework" />
        <SkillList src={checkMarkIcon} skill="Javascript" />
      </div>
      <hr />
      <h2>Database Management</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="SQL Server" />
      </div>
      <hr />
      <h2>Software & Tools</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Microsoft Office#" />
        <SkillList src={checkMarkIcon} skill="GitHub" />
        <SkillList src={checkMarkIcon} skill="Notion" />
      </div>
      <hr />
      <h2>Soft Skills</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Attention to detail#" />
        <SkillList src={checkMarkIcon} skill="Problem-solving" />
        <SkillList src={checkMarkIcon} skill="Time management" />
        <SkillList src={checkMarkIcon} skill="Communication" />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
