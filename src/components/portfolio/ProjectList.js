import React, { Component } from 'react';
import { portefolioData } from '../../data/portfolioData';
import Project from './Project';

class ProjectList extends Component {
    state = {
        project : portefolioData
    };


    render() {
        let {project} = this.state;
        return (
            <div className='portefolioContent'>
                <ul className='radioDisplay'>

                </ul>
                <div className='projects'>
                    {
                        project.map(item => {
                            return (
                                <Project
                                    key = {item.id}
                                    item = {item}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ProjectList;