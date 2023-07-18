import React from 'react';
import Navigation from '../components/Navigation';
import ProjectList from '../components/portfolio/ProjectList';

const PorteFolio = () => {
    return (
        <div className='portfolio'>
            <Navigation/>
            <ProjectList/>
        </div>
    );
};

export default PorteFolio;