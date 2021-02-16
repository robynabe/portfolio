// MAIN PAGE (Projects) //
import React, { useState, useEffect } from "react";
import Top from './Top';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

const Main = () => {

    // const [isotope, setIsotope] = useState(null);
    // const [filterKey, setFilterKey] = useState('*');

    // useEffect(() => {
    //     setIsotope(
    //         new Isotope('.project-container', {
    //             itemSelector: 'section',
    //             layoutMode: 'fitRows'
    //         })
    //     )
    // }, [])

    // useEffect(() => {
    //     if (isotope) {
    //         filterKey === '*'
    //         ? isotope.arrange({ filter: `*` })
    //         : isotope.arrange({ filter: `.${filterKey}` });
    //     }
    // }, [isotope, filterKey]);

    return (
        <main className="main-projects">
            {/* <nav id="filter" className="filters">
                <ul >
                    <li onClick={() => setFilterKey('*')}>All Projects</li>
                    <li onClick={() => setFilterKey('react')}>React Projects</li>
                    <li onClick={() => setFilterKey('other')}>Other Projects</li>
                </ul>
            </nav> */}
            <div className="project-container">
                {projects.map((project, index) => (
                <section key={index} className={project.filter}>
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
                            <h2>{project.name}</h2>
                            <p>{project.tools}</p>
                            <p>{project.overview}</p>
                        </div>
                    </div>
                </section>
            ))}
            </div>
            <Top />
        </main>
    )
}
export default Main;