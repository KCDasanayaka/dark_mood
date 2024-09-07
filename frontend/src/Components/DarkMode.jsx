import React from "react";
import { ReactComponent as Sun } from "../assets/Sun.svg";
import { ReactComponent as Moon } from "../assets/Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
    const setDarkMode=()=>{
        document.querySelector("body").setAttribute('data-theme', 'dark')
    }
    const setLightMode=()=>{
        document.querySelector("body").setAttribute('data-theme', 'light')
    }
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
