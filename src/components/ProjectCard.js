import React from 'react';

const ProjectCard = ({project}) => {
    return (
        <div className='w-1/3 px-3'>
            <div className='mb-10'>
                <img className='w-full'
                     src="https://www.vsemirnyjbank.org/content/dam/photos/780x439/2017/jun-1/ru-city-780.jpg"
                     alt=""/>
                <h5 className='text-2xl uppercase'>{project.title}</h5>
                <ul>
                    <li>{project.dateStart} - {project.dateEnd} гг.</li>
                    <li>{project.manager}</li>
                    <li>{project.administrator}</li>
                </ul>
            </div>
        </div>
    );
};

export default ProjectCard;
