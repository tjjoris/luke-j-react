import ProjectCategory from "./ProjectCategory";
import "../assets/css/project-bar.css";
export default function ProjectBar({ setCategory, category }: { setCategory: (category: string) => void, category: string }) {
    return (
        <div className="project-bar">
            <ProjectCategory name="Front-end" setCategory={setCategory} selected={category} />
            <ProjectCategory name="Back-end" setCategory={setCategory} selected={category} />
            <ProjectCategory name="Top Games" setCategory={setCategory} selected={category} />
            <ProjectCategory name="Prototypes" setCategory={setCategory} selected={category} />
            <ProjectCategory name="Other" setCategory={setCategory} selected={category} />

        </div>
    )
}