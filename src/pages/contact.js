import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className='contact'>
            <Navigation/>
            <div className='contactContent'>
            <div className='contactBox'>
                <h1>Contactez-moi</h1>
                <ul>
                    <li>
                        <i className='fas fa-map-marker-alt'></i>
                        <span>Poitiers</span>
                    </li>
                    <li>
                        <i className='fas fa-mobile-alt'></i>
                        <CopyToClipboard text="0671061919">
                            <span className='clickInput' onClick={() => {
                                alert('Téléphone copié !')
                            }}>06 71 06 19 19</span>
                        </CopyToClipboard>
                    </li>
                    <li>
                        <i className='fas fa-envelope'></i>
                        <CopyToClipboard text="cyrille.carre@gmail.com">
                            <span className='clickInput' onClick={() => {
                                alert('E-mail copié !')
                            }}>cyrille.carre@gmail.com</span>
                        </CopyToClipboard>
                    </li>
                </ul>
                </div>
                <div className='socialNetwork'>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/cyrille-carre-b9863325b" target="_blank" 
                        rel='noopener noreferrer'>
                            <h4>Linkedin</h4>
                            <i className='fab fa-linkedin'></i></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/cyrille.carre" target="_blank"
                        rel='noopener noreferrer'>
                            <h4>Facebook</h4>
                            <i className='fab fa-facebook'></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/Cyrillecarre" target="_blank"
                        rel='noopener noreferrer'>
                            <h4>Github</h4>
                            <i className='fab fa-github'></i></a>
                    </li>
                    <li>
                        <a href="https://www.strava.com/athletes/119532147" target="_blank"
                        rel="noopener noreferrer">
                            <h4>Strava</h4>
                            <i className='fab fa-strava'></i></a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Contact;