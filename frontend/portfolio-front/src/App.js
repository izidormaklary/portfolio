
import './App.scss';
import Projects from "./components/Projects";
import {useState} from "react";
import Navigation from "./components/Navigation";
import About from "./components/About";

const App = () => {
    const [projectStatus, setProjectStatus] = useState("")
    const [aboutStatus, setAboutStatus] = useState("")
    const [page, setPage] = useState("")
    return (
        <div className="App">
            <Navigation page={page} setPage={setPage} setProjectStatus={setProjectStatus} setAboutStatus={setAboutStatus}/>
            {
                page === "projects" ?
                    <Projects projectStatus={projectStatus} setProjectStatus={setProjectStatus} />
                : page === "about" ?
                    <About aboutStatus={aboutStatus} setAboutStatus={setAboutStatus}/>
                : ""
            }
        </div>
    );
}

export default App;
