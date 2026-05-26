import Project from "./Project";
import ProjectBar from "./ProjectBar";
import { useState } from "react";
import projectsJson from "../assets/data/projects.json";
import ActionRoundedButton from "./ActionRoundedButton";
import { openLinkInNewTab } from "../functions/openLinkInNewTab";

export default function Portfolio() {

    const [category, setCategory] = useState("Front-end");
    const filteredProjects = projectsJson.projects.filter((project) =>
        project.categories.includes(category));
    const backgroundColours: string[] = ["rgb(80, 80, 178)", "rgb(76, 76, 179)", "rgb(72, 72, 160)"]

    return (
        <div className="portfolio" id="portfolio">
            <ProjectBar setCategory={setCategory} />

            {

                filteredProjects.map((project, index) => {
                    return (
                        < Project
                            key={index}
                            imageUrl={project.image}
                            title={project.name}
                            description={project.description}
                            DemoButton={
                                project.demo
                                    ? () =>
                                        <ActionRoundedButton
                                            key={index}
                                            text="Demo"
                                            action={() => openLinkInNewTab(project.demo)} />
                                    : null
                            }
                            backgroundColor={backgroundColours[index % backgroundColours.length]}
                            LearnMore={project.learnMore} />
                    )
                })}
        </div>
    )
}