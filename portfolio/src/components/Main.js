// MAIN PAGE (Projects) //
import React, { useState } from "react";
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';

const Main = () => {
    window.scrollTo(0,0);

    const [projectFilter, setProjectFilter] = useState(projects);

    const react = projects.filter(project => project.sort === 'react'); 
    const other = projects.filter(project => project.sort === 'other');

    function showAll() {
        setProjectFilter(projects)
    }
    function showReact() {
        setProjectFilter(react);
    }
    function showOther() {
        setProjectFilter(other);
    }

    return (
        <main className="main-projects">
            <MetaTags>
                <title>Robyn Abe • Web Developer</title>
                <meta name="description" content="A portfolio website for technical projects completed by a 
                                                Front-end web developer showcasing website design and use of HTML, CSS
                                                SASS, JavaScript, React and other web development skills and tools" />
                <meta property="og:title" content="Portfolio Projects" />
            </MetaTags>
            
            <h1>Projects</h1>

            <div className="filter-btns">
                <button onClick={() => showAll()} active="true">All Projects</button>
                <button onClick={() => showReact()}>React Projects</button>
                <button onClick={() => showOther()}>Other Projects</button>
            </div> 

            <div className="project-container">

                {projectFilter.map((project, index) => (
                <section key={index} className={project.sort}>
                    
                    <div className="project">
                        <div className="corner-border"></div>
                        <div className="img-container">
                            <img className="projects-img" src={project.image} alt={project.alt} />
                        </div>

                        <div className="project-info">
                            <Link to={project.page} className="see-project-link">
                                <span>See Project</span>
                               <svg width="30px" height="20px" viewBox="0 0 13 10">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </Link>
                            <Link to={project.page} className="project-section-link">
                                <h2>{project.name}</h2>
                                <p>{project.tools}</p>
                                <p>{project.overview}</p>
                            </Link>
                        </div>

                    </div>
                </section>
            ))}

            </div>
        </main>
    )
}
export default Main;