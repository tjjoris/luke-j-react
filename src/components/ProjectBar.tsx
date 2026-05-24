import ProjectCategory from "./ProjectCategory";
import "../assets/css/project-bar.css";
export default function ProjectBar({ setCategory }: { setCategory: (category: string) => void }) {
    return (
        <div className="project-bar">
            <ProjectCategory name="React/Front-end" setCategory={setCategory} />
            <ProjectCategory name="Back-end" setCategory={setCategory} />
            <ProjectCategory name="Top Games" setCategory={setCategory} />
            <ProjectCategory name="Experimental Games" setCategory={setCategory} />
            <ProjectCategory name="Other" setCategory={setCategory} />

        </div>
    )
}