import React from 'react';
import axios from 'axios';
import ProjectModal from "./ProjectModal";
import {useState, useEffect} from "react";

const Projects = ({projectStatus, setProjectStatus}) => {
    const [projects, setProjects] = useState([])
    const [tags, setTags] = useState([])
    const [tag, setTag] = useState("")

    const [tagStatus, setTagStatus] = useState("")
    const [modal, setModal] = useState("");
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/projects${tag}`)
            .then(res => {
                const projects = res.data;
                setProjects(projects);
            }).then(() => {
            if (!tagStatus) setProjectStatus("mounted")
        })


    }, [tag]);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/tags`)
            .then(res => {
                const tags = res.data;
                setTags(tags);
            })

    }, [tag]);
    if (!projects) return null;

    return (
        <>
            <div className={"tagsContainer " + tagStatus}
                 onClick={() => {
                     if (!tagStatus) {
                         setTagStatus("active");
                         setProjectStatus("shiftDown")
                     }
                 }}
            >
                <span className={"tagTitle"}>filter {tag && !tagStatus ? tag : ""}   </span>
                {
                    tags.map(tagEl => {
                        return (
                            <div className={("/" + tagEl === tag) ? "tag clicked" : "tag"} key={tagEl}
                                 onClick={() => {
                                     let clickedTag = "/" + tagEl
                                     clickedTag = clickedTag === tag ? "" : clickedTag
                                     setTag(clickedTag)

                                 }}>{tagEl} </div>
                        )
                    })
                }
                <span className={"close"}
                      onClick={() => {
                          setTagStatus("");
                          setProjectStatus("mounted")
                      }}
                >close</span>
            </div>

            <div className={"projectsContainer " + projectStatus} id={"projects"}>
                {
                    projects.map(project => {
                        return (
                            <div className="projectSmall" key={project.id}
                            onClick={()=>{setModal(project.id)}}
                            >
                                <img className="previewImage" src={project.prev_image} alt="preview_image"/>
                                <h1 className={"projectTitle"}>{project.name}</h1>
                                <p className={"projectDescription"}>{project.short_description}</p>

                            </div>
                        )
                    })
                }
            </div>
            {modal ? <ProjectModal setModal={setModal} modal={modal}/> : <></>}
        </>
    )
};

export default Projects;
