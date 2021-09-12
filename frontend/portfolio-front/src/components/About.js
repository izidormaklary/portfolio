import React from 'react';
import {useState, useEffect} from "react";
import axios from "axios";

const About = ({aboutStatus, setAboutStatus}) => {

    useEffect(() => {
        setTimeout(() => setAboutStatus("mounted"), 20)

    }, [])
    return (
        <div className={"aboutContainer " + aboutStatus}>
            <div className={"aboutPage"}
                 onMouseMove={(el) => {
                     let pos = el.clientX
                     if (pos % 3 === 0) {
                         document.documentElement.style.setProperty('--shift-layers', -el.clientX / 15 + "px")

                     }
                 }
                 }
            >

                <div id={"images"}>

                    <img id={"layer3"} className={"layers"} src="./resources/layer3.png" alt=""/>
                    <img id={"layer2"} className={"layers"} src="./resources/layer2.png" alt=""/>
                    <img id={"layer1"} className={"layers"} src="./resources/layer1.png" alt=""/>
                    {/*<img id={"profile_pict"} className={"layers"} src="./resources/profile_pict.png" alt=""/>*/}
                </div>
                <div className={"introduction"}>
                    <p className={"text"}>
                        Hello! I'm Izidor Maklary a junior web-developer. I enjoy developing both front- and back-end.
                        Of course perfection is in both cases very important for me.

                        <br/>I hope you enjoyed looking through
                        my portfolio, if you want me to work for you contact me.
                    </p>
                    <img className={"profilePict"} src="./resources/profile_pict.png" alt="my profile picture"/>
                    <div className={"buttons"}>
                        <a className={"linkedIn link"} href="https://www.linkedin.com/in/izidor-maklary" target={"_blank"}>Find my contact details on linkedIn</a>
                        <a className={"github link"} href="https://github.com/izidormaklary" target={"_blank"}>Take a look at my github</a>
                    </div>

                </div>

                <div id={"images2"}>

                    <img id={"layer3"} className={"layers"} src="./resources/layer3.png" alt=""/>
                    <img id={"layer2"} className={"layers"} src="./resources/layer2.png" alt=""/>
                    <img id={"layer1"} className={"layers"} src="./resources/layer1.png" alt=""/>
                    {/*<img id={"profile_pict"} className={"layers"} src="./resources/profile_pict.png" alt=""/>*/}
                </div>

            </div>
        </div>
    );
}

export default About;
