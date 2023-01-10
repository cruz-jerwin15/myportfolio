import React from 'react';
import Designation from '../Designation/Designation';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import Title from '../Title/Title';
import ToolList from '../ToolList/ToolList';

import './Hero.css';
const Hero=()=> {
    return (
         <React.Fragment>
            <div className="hero">
                <Header/>
                <div className="title">
                    <Title/>
                </div>
                <div className="designation">
                    <Designation/>
                </div>
            
                
                <ToolList/>
                <div className="intro">
                    <Intro/>
                </div>
                
            </div>
         </React.Fragment>  
    );
    
}

export default Hero;