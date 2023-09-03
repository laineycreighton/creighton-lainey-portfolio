import React, { useState } from 'react';
import placeholder from '../styles/images/placeholder.png';
import sasquest from '../styles/images/Sasquest-Login.png';
import endevors from '../styles/images/endevors-home.png';
import upstream from '../styles/images/upstream-travel-home.png';
import '../styles/Portfolio.css';

//Export the Portfolio page
export default function Portfolio() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        {
            title: 'Sasquest',
            image: sasquest,
            repo: 'https://github.com/laineycreighton/sasquest',
            website: 'https://www.linkedin.com/in/lainey-creighton/'
        },
        {
            title: 'enDEVors',
            image: endevors,
            repo: 'https://github.com/ssherp/EnDEVor',
            website: 'https://endevor-3d604fa0490c.herokuapp.com/'
        },
        {
            title: 'Upstream Travel',
            image: upstream,
            repo: 'https://github.com/elenagurchinskaia/upstream-travel',
            website: 'https://elenagurchinskaia.github.io/upstream-travel/'
        },
        {
            title: 'Project 4',
            image: placeholder,
            repo: 'https://github.com/laineycreighton',
            website: 'https://www.linkedin.com/in/lainey-creighton/'
        },
        {
            title: 'Project 5',
            image: placeholder,
            repo: 'https://github.com/laineycreighton',
            website: 'https://www.linkedin.com/in/lainey-creighton/'
        },
        {
            title: 'Project 6',
            image: placeholder,
            repo: 'https://github.com/laineycreighton',
            website: 'https://www.linkedin.com/in/lainey-creighton/'
        },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const currentProject = projects[currentIndex];

    return (
        <div className="project-carousel">
            <div className="carousel-buttons">
                <button onClick={prevSlide}> ← </button>
            </div>
            <div className='project-card'>
                <div className='img-container'>
                    <div className="project-image">
                        <img src={currentProject.image} alt={currentProject.title} />
                    </div>
                </div>
                <div className="project-details">
                    <h5>{currentProject.title}</h5>
                    <div className='links'>
                        <button><a href={currentProject.repo} target='_blank'>Repo</a></button>
                        <button><a href={currentProject.website} target='_blank'>Website</a></button>
                    </div>
                </div>
            </div>
            <div className="carousel-buttons">
                <button onClick={nextSlide}>→</button>
            </div>
        </div>
    );
};