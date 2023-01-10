import React from "react";
import Tool from "../Tool/Tool";

import './ToolList.css';

const ToolList =()=>{
    const icons=[
        {
            icon:"simple-icons:frontendmentor",
            link:"https://www.frontendmentor.io/profile/cruz-jerwin15"
        },
        {
            icon:"teenyicons:twitter-solid",
            link:"https://twitter.com/jerzcruzzz"
        },
        {
            icon:"simple-icons:facebook",
            link:"https://www.facebook.com/topgun23/"
        },
        {
            icon:"simple-icons:github",
            link:"https://github.com/cruz-jerwin15/"
        },
        {
            icon:"simple-icons:vercel",
            link:"https://vercel.com/cruz-jerwin15"
        }
    ];
    return(
        <React.Fragment>
            <div className="tool-list">
            <Tool icon={icons[0].icon} link={icons[0].link}/>
            <Tool icon={icons[1].icon} link={icons[1].link}/>
            <Tool icon={icons[2].icon} link={icons[2].link}/>
            <Tool icon={icons[3].icon} link={icons[3].link}/>
            <Tool icon={icons[4].icon} link={icons[4].link}/>
            </div>
        </React.Fragment>
    );
}

export default ToolList;