import React from "react";
import menu from '../assets/images/menu-burger.svg';
import { Icon } from '@iconify/react';
import './Side.css';
const Side=()=>{
    return(
        <React.Fragment>
            <div class="dropdown">
                <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <Icon icon="ic:sharp-menu" color="#FFC93C" width="2em"/>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Home</a></li>
                    <li><a class="dropdown-item" href="#">Skills</a></li>
                    <li><a class="dropdown-item" href="#">Projects</a></li>
                </ul>
                </div>
        </React.Fragment>
    );
}
export default Side;