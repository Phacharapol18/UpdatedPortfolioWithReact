import React from "react";
import Profile from "../images/ProfilePictureMaker.png"
export default function Home (){
    return(
        <div>
            <div className="homes">
               <h1 className="animate__animated animate__fadeInDown">Phacharapol Phukana</h1>
            <img className="profilePic" src={Profile} alt="ProfilePic"></img> 
            </div>
            
        </div>
    )
}