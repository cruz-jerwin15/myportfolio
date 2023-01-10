import React from 'react';

import './Skill.css';
const Skill=(props)=> {
   
    return (
        <React.Fragment>
            <div className="skill">
                <h3>{props.skill}</h3>
            </div>
        </React.Fragment>
    );
  
}

export default Skill;