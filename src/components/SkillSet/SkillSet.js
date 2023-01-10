import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Profile from '../Profile/Profile';
import SkillList from '../SkillList/SkillList';
import Bio from '../Bio/Bio';

import './SkillSet.css';
const SkillSet=()=>{
   
    return (
        <React.Fragment>
            <div class="skillset">
                <div className="section-title">
                    <SectionTitle/>
                </div>
                <div className="profile">
                    <Profile/>
                </div>
                <div className="skilllist">
                    <SkillList/>
                </div>
                <div className="bio">
                    <Bio/>
                </div>
            </div>
          
        </React.Fragment>
    );
    
}

export default SkillSet;