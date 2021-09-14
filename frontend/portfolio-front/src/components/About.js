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
                // onMouseMove={(el) => {
                //     let pos = el.clientX
                //     if (pos % 3 === 0) {
                //         document.documentElement.style.setProperty('--shift-layers', -el.clientX / 15 + "px")
                //
                //     }
                // }
                // }
            >

                {/*<div id={"images"}>*/}
                {/*    <img id={"layer3"} className={"layers"} src="/static/resources/layer3.png" alt=""/>*/}
                {/*    <img id={"layer2"} className={"layers"} src="/static/resources/layer2.png" alt=""/>*/}
                {/*    <img id={"layer1"} className={"layers"} src="/static/resources/layer1.png" alt=""/>*/}
                {/*</div>*/}
                <div className={"introduction"}>
                    <div className={"textContainer"}>

                        <p className={"text"}>
                            Hello, i'm Izidor Maklary a junior web-developer. I enjoy creating both front- and
                            back-end platforms.
                            Of course perfection is in both cases very important for me.
                        </p>
                        <p className={"text"}>
                            I hope you enjoyed looking through
                            my portfolio. Feel free to contact me, if you are interested in my work.
                        </p>
                    </div>
                    <img className={"profilePict"} src="/static/resources/profile_pict.png" alt="my profile picture"/>
                    <div className={"buttons"}>
                        <a className={"linkedIn link"} href="https://www.linkedin.com/in/izidor-maklary"
                           target={"_blank"}>contact details on linkedIn</a>
                        <a className={"github link"} href="https://github.com/izidormaklary" target={"_blank"}>more
                            projects at github</a>
                    </div>

                </div>

                {/*<div id={"images2"}>*/}

                {/*    <img id={"layer3"} className={"layers"} src="/static/resources/layer3.png" alt=""/>*/}
                {/*    <img id={"layer2"} className={"layers"} src="/static/resources/layer2.png" alt=""/>*/}
                {/*    <img id={"layer1"} className={"layers"} src="/static/resources/layer1.png" alt=""/>*/}
                {/*</div>*/}

            </div>
        </div>
    );
}

export default About;
