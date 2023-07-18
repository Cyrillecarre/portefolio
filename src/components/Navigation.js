import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="/media/Image.jpeg" alt='profil-pic'></img>
                    <h3>Cyrille CARRE</h3>
                </div>
            </div>
            <div className='navigation'>
                <ul>
                    <li>
                    <NavLink exact to ="/" activeClassName="navActive">
                        <i className='fas fa-home'></i>
                        <span>Accueil</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to ="/competences" activeClassName="navActive">
                        <i className='fas fa-mountain'></i>
                        <span>Competences</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to ="/portefolio" activeClassName="navActive">
                        <i className='fas fa-images'></i>
                        <span>PorteFolio</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to ="/contact" activeClassName="navActive">
                        <i className='fas fa-address-book'></i>
                        <span>Contact</span>
                    </NavLink>
                    </li>
                </ul>
            </div>
            <div className='socialNetwork'>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/cyrille-carre-b9863325b" target="_blank" 
                        rel='noopener noreferrer'><i className='fab fa-linkedin'></i></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/cyrille.carre" target="_blank"
                        rel='noopener noreferrer'><i className='fab fa-facebook'></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/Cyrillecarre" target="_blank"
                        rel='noopener noreferrer'><i className='fab fa-github'></i></a>
                    </li>
                    <li>
                        <a href="https://www.strava.com/athletes/119532147" target="_blank"
                        rel="noopener noreferrer"><i className='fab fa-strava'></i></a>
                    </li>
                </ul>
                <div className='signature'>
                    <p>fromCarreCyrille. - 2023</p>
                </div>
            </div>
        </div>

    );
};

export default Navigation;