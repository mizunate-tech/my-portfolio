
import styles from './SkillsStyles.module.css'
import SkillList from '../../common/SkillList'
function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">My Tech Stacks</h1>
        <div className={styles.skillList}>
        <h2>Languages:</h2>
        <SkillList  skill="Python, Javascript, C#"/>
        </div>
        <hr />
        <div className={styles.skillList}>
        <h2>Web:</h2>
        <SkillList  skill="Html, Css, React"/>
        </div>
        <hr />
        <div className={styles.skillList}>
        <h2>Backend:</h2>
        <SkillList  skill="MySQL, SQL Server"/>
        </div>
        <hr />
       
    </section>
  )
}

export default Skills