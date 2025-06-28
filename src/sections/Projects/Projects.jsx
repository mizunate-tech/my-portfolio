import React from "react";
import styles from "../Projects/ProjectStyles.module.css";
import datawarehouse from "../../assets/data-warehouse.png";
import sql_eda from "../../assets/sql-eda.png";
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
          p="Develop a modern data warehouse using SQL Server to consolidate sales data, enabling analytical reporting and informed decision-making."
        />
        <ProjectCard
          src={sql_eda}
          link="https://github.com/mizunate-tech/sql-data-warehouse-project.git"
          h3="SQL-Data-Analytics"
          p="A comprehensive collection of SQL scripts for data exploration, analytics, and reporting. "
        />
      </div>
    </section>
  );
}

export default Projects;
