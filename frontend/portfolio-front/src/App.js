
import './App.scss';
import Projects from "./components/Projects";
import {useState} from "react";
import Navigation from "./components/Navigation";

function App() {
    const [projectStatus, setProjectStatus] = useState("")
    const [page, setPage] = useState("")
    return (
        <div className="App">
            <Navigation page={page} setPage={setPage} setProjectStatus={setProjectStatus}/>
            {
                page === "projects" ?
                <Projects projectStatus={projectStatus} setProjectStatus={setProjectStatus} />
                : page === "about" ?
                    "about"
                : ""
            }
        </div>
    );
}

export default App;
