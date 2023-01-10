import React from "react";
import Brand from "../Brand/Brand";
import Side from "../Side/Side";
import './Header.css';
const Header=()=>{

    return(
        <React.Fragment>
            <div className="header">
                <div className="brand">
                <Brand/>
                </div>
                <div className="side">
                <Side/>
                </div>
               
            </div>
        </React.Fragment>
    );

}
export default Header;