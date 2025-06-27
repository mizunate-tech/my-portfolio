import React from "react";
import styles from "../Projects/ProjectStyles.module.css";
import datawarehouse from "../../assets/data-warehouse.png";
import freshBurger from "../../assets/fresh-burger.png";
import ProjectCard from "../../common/ProjectCard";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      {/* Projects Section*/}
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={datawarehouse}
          link="https://github.com/mizunate-tech/sql-data-warehouse-project.git"
          h3="Data Warehouse and Analytics"
          p=" Develop a modern data warehouse using SQL Server to consolidate sales data, enabling analytical reporting and informed decision-making."
        />
      </div>
    </section>
  );
}

export default Projects;
