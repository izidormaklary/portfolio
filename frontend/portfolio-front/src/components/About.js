import React from 'react';
import {useState, useEffect} from "react";
import axios from "axios";

const About = ({ aboutStatus, setAboutStatus}) => {

    useEffect(()=>{
    setTimeout(()=>setAboutStatus("mounted"),20)

    },[])
    return (
       <div className={"aboutContainer "+ aboutStatus}>
            <div className={"aboutPage"}>
                <h1>Hello</h1>

                <p>Lorem ipsumas asd d sd  dsds ds sdsdsd sd sda s as dsd s</p>
                <p>Lorem ipsumas asd d sd  dsds ds sdsdsd sd sda s as dsd s
                Lorem ipsumas asd d sd  dsds ds sdsdsd sd sda s as dsd s</p>
                <p>Lorem ipsumas asd d sd  dsds ds sdsdsd sd sda s as dsd s
                Lorem ipsumas asd d sd  dsds ds sdsdsd sd sda s as dsd s</p>
                <p>Lorem ipsumas asd d sd  dsds ds sdsdsd sd sda s as dsd s</p>
                <p>Lorem ipsumas asd d sd  dsds ds sdsdsd sd sda s as dsd s</p>
            </div>
       </div>
    );
}

export default About;
