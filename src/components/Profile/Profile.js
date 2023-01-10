import React from 'react';
import myprofile from '../assets/images/profile.jpg';
import './Profile.css';
const Profile=()=> {
    return (
       <React.Fragment>
        <div className="profiles">
            <img src={myprofile} alt="" />
            <div className="right-profile"></div>
            <div className="left-profile"></div>
        </div>
       </React.Fragment>
    );
    
}

export default Profile;