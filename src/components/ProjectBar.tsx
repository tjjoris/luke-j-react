import ProjectCategory from "./ProjectCategory";
import "../assets/css/project-bar.css";
export default function ProjectBar() {
    return (
        <div className="project-bar">
            <ProjectCategory name="React/Front-End" />
            <ProjectCategory name="Games" />
            <ProjectCategory name="Experimental Games" />
            <ProjectCategory name="Other" />
            <ProjectCategory name="Back-End" />
        </div>
    )
}