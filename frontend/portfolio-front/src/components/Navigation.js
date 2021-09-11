import React, {useState} from 'react';


const Navigation = ({setPage, page, setProjectStatus, setAboutStatus}) => {

    const [navStatus, setNavStatus] = useState("grow");
    // const navSize = page ? "shrink" : "grow";

    function handleNavClick(route) {

        if(route !== page) {
            //if coming from a page
            if (page) {
                // and going to a page
                if (route) {
                    if (route !== "projects") setProjectStatus("")
                    if (route !== "about") setAboutStatus("")
                    setTimeout(() => setPage(route), 600)
                // or going to the homepage
                } else {
                    if (page === "projects") setProjectStatus("")
                    if (page === "about") setAboutStatus("")

                    setNavStatus("grow")
                    setTimeout(() => setPage(route), 600)
                }
                // setTimeout(() => setPage(route), 1000)
                // if (route !== "projects") setProjectStatus("")
            // if coming from landing
            } else {

                setNavStatus("shrink")
                setPage(route)
            }
        }

    }
    let projectClicked = page === "projects" ? "clicked" : "";
    let aboutClicked = page === "about" ? "clicked" : "";
    return (
        <div className={"navContainer " + navStatus}>
            <div className={"navElement"}
                 onClick={(el) => {
                     handleNavClick("")
                 }
                 }
            >
                Izidor Maklary
            </div>
            <div
                className={"navElement clickable "+ projectClicked}
                 onClick={(el) => {
                     handleNavClick("projects")
                 }
                 }
            >
                Projects
            </div>
            <div className={"navElement clickable "+ aboutClicked}
                 onClick={(el) => {
                     handleNavClick("about")
                 }}>
                About
            </div>
        </div>
    );
}

export default Navigation;
