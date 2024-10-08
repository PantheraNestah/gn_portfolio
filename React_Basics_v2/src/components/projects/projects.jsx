import React from "react";
import prop_data from "./my_projects_data.json";
import "./projects.scss";

const Projects = () => {

    return (
        <section id="projects" className="projects_section col-12">
            <h2 className="section_title col-md-6 col-lg-5">Projects</h2>
            <div className="projects_container col-md-11 col-xl-10 mx-md-auto">
                {prop_data.map((project, index) => {
                    return <Project key={index} {...project} />
                })}
            </div>
        </section>
    );
}


const Project = ({title, img, link, description, stack}) => {
    
    return (
        <article className="project d-flex align-items-start justify-content-center">
            <div className="project_photo border">
                <img src={img} alt="" />
            </div>
            <div className="project_details col-lg-5 d-flex flex-column align-items-start">
                <h3>{title}</h3>
                <p className="col-md-10">{description}</p>
                <ul className="project_stack d-flex align-items-center">
                    {stack.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
                <a href={link} target="_blank" className="view_proj_link">View project</a>
            </div>
        </article>
    );
}

export default Projects;