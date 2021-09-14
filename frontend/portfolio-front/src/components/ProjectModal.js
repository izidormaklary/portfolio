import React from 'react';
import {useState, useEffect} from "react";
import axios from "axios";

const ProjectModal = ({modal, setModal}) => {
    const [project, setProject] = useState([])
    const [modalStatus, setModalStatus] = useState("")

    useEffect(() => {
        axios.get(`/api/project/${modal}`)
            .then(res => {
                const project = res.data;
                setProject(project);
            }).then(() => {
            setModalStatus("mounted")
        })


    }, [modal]);
    if (!project && !project.long_description) return null;
    return (
        <div className={"modalContainer " + modalStatus} id={"modalContainer"}
             onClick={(e) => {
                 if (e.target.id === "modalContainer") {
                     setModalStatus("")
                     setTimeout(()=>setModal(""),500)
                 }
             }}>
            <div className={"modalProject"}

            >
                <img className={"modalCover"} src={project.display_image} alt={"image of the "+ project.name+" project"}/>
                <h1 className={"modalName"}> {project.name}</h1>
                <div className={"modalDesc"}>
                    {
                        project.long_description ?

                        project.long_description.map(el=>{
                            return (
                                <p className={"descrParagraph"} key={el.text}>
                                    {el.text}
                                </p>
                            )
                        }) : <></>
                    }
                </div>

                <h3 className="smallTitle">Languages used</h3>
                {
                    project.languages ?
                        project.languages.map(lang => {
                            return (
                                    <span className={"languages"} key={lang.percentage}>
                                        {lang.language } {lang.percentage}%
                                    </span>
                            )
                        }) : <></>
                }
                <div className={"linkContainer"}>
                    <a className={"gitLink"} href={project.github_url} target="_blank" rel={"noreferrer"}>
                        code
                        on github</a>
                    {project.host_url
                        ?
                        <a className={"deployLink"} href={project.host_url} target="_blank" rel={"noreferrer"}>
                            deployed version</a>
                        : <></>
                    }
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;
