import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>
            <h3>Intérêts</h3>
            <ul>
                <li className='hobby'>
                    <i className='fas fa-bicycle'></i>
                    <span>Vélo tout terrain</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-bicycle'></i>
                    <span>Vélo de route</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-running'></i>
                    <span>Course à pied</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-fish'></i>
                    <span>Pêche sportive</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-hiking'></i>
                    <span>Randonnées</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;