import React, {useState} from 'react';
import './Welcome.css'

export default function Welcome(props) {


    const handleClick =()=>{

        var hid = document.getElementsByClassName("exp");

        if(hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
            hid[0].style.visibility = "visible";
        }
    }
    return (

        <>

        <div className="Inputer my-2">
            <button type="button" class="btn-primary mx-2" onClick={handleClick}>Log In</button>
        </div>
        <div class="exp">
            <h1>Hey ! {props.name}</h1>
            <h2 class="and">Welcome to LPU College</h2>
        </div>
        <p>Assigement done by Vivek Sharma 12013688</p>
        
        </>
    )
}