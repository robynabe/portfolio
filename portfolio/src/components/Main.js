// MAIN PAGE (Projects) //
//import React, { useState, useEffect } from "react";
import Top from '../utilities/top';
import Image from '../images/code-placeholder-img.png'; // Change once iamges are confirmed
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import Date from '../utilities/date';

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
            <h1>Web Developer</h1>
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
                        <img className="projects-img" src={Image} alt="Code" width="200px" />
                        <div className="project-info">
                            <h2>{project.name}</h2>
                            <p>{project.tools}</p>
                            <p>{project.overview}</p>
                        </div>
                        <Link to={project.page} className="see-project-link">See Project</Link>
                        
                    </div>
                </section>
            ))}
            </div>
            <Top />
        </main>
    )
}
export default Main;