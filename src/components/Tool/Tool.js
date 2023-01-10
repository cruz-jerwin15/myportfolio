import React from "react";
import { Icon } from '@iconify/react';
import './Tool.css';
const Tool=(props)=>{
    return(
        <React.Fragment>
            <a href={props.link}><Icon icon={props.icon} color="white" width="1.6em"/></a>
        </React.Fragment>
    );
}
export default Tool;