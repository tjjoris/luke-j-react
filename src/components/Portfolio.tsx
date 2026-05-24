import Project from "./Project";
import ProjectBar from "./ProjectBar";
import { useState, useRef, useEffect } from "react";
import projectsJson from "../assets/data/projects.json";
import ActionRoundedButton from "./ActionRoundedButton";
import { type LearnMore } from "../types/learnMore";
import { openLinkInNewTab } from "../functions/openLinkInNewTab";
import { useContext } from "react";
import { PopupContext } from "../contexts/popupContext";
import { type ProjectData } from "../types/projectData";

export default function Portfolio() {

    // type ProjectData = {
    //     name: string;
    //     description: string;
    //     demo: string | null;
    //     image: string;
    //     learnMore: LearnMore | null;
    //     gitHub: string;
    //     categories: string[];
    // }
    //popup context
    const popupContext = useContext(PopupContext);

    const [category, setCategory] = useState("React/Front-end");
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
                            imageUrl={project.image}
                            title={project.name}
                            description={project.description}
                            DemoButton={
                                project.demo
                                    ? () =>
                                        <ActionRoundedButton text="Demo" action={() => openLinkInNewTab(project.demo)} />
                                    : null
                            }
                            backgroundColor={backgroundColours[index % backgroundColours.length]}
                            LearnMore={project.learnMore} />
                    )
                })}
            {/* })} */}
            {/* <Project imageUrl={loomByLightImage} title="Loom by Light" description="LBL project." backgroundColor="rgb(80, 80, 178)" DemoButton={lBlDemoButton} LearnMoreButton={lblInfoButton} />
            <Project imageUrl={fuzzyKittensImage} title="Fuzzy Kittens" description="A cool project." backgroundColor="rgb(76, 76, 179)" DemoButton={null} LearnMoreButton={fuzzyKittensInfoButton} />
            <Project imageUrl={aScienceOfRealmsImage} title="A Science of Realms" description="Award winning game" backgroundColor="rgb(72, 72, 160)" DemoButton={null} LearnMoreButton={null} /> */}
        </div>
    )
}