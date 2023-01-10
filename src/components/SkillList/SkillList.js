import React from "react";
import Skill from "../Skill/Skill";

import './SkillList.css';
const SkillList=()=> {
    const skills=[
        "Javascript",
        "CSS",
        "HTML",
        "Node.js",
        "MongoDB",
        "MySQL",
        "PHP",
        "Laravel",
        "Java",
        "Android",
        "React.js"
    ];
    return (
        <React.Fragment>
            <div className="skill-list">
                <Skill skill={skills[0]}/>
                <Skill skill={skills[1]}/>
                <Skill skill={skills[2]}/>
                <Skill skill={skills[3]}/>
                <Skill skill={skills[4]}/>
                <Skill skill={skills[5]}/>
                <Skill skill={skills[6]}/>
                <Skill skill={skills[7]}/>
                <Skill skill={skills[8]}/>
                <Skill skill={skills[9]}/>
                <Skill skill={skills[10]}/>
            </div>
        </React.Fragment>
    );
    
}

export default SkillList;