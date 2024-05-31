import React from "react";
import logo from "./images/logo_notes.png";

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" width='120' height='120' />
            <h1>Keep Notes</h1>
        </div>
    );
};

export default Header;
