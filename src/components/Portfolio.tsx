import Project from "./Project";
import RoundedButton from "./RoundedButton";
import NewWindowRoundedButton from "./NewWindowRoundedButton";
import ProjectBar from "./ProjectBar";
import { useState, useRef, useEffect } from "react";
import projectsJson from "../assets/data/projects.json";


export default function Portfolio() {

    type ProjectData = {
        name: string;
        description: string;
        demo: string | null;
        image: string;
        moreInfo: string;
        gitHub: string;
        categories: string[];
    }
    const [category, setCategory] = useState("React/Front-end");
    const filteredProjects = projectsJson.projects.filter((project) =>
        project.categories.includes(category));
    const backgroundColours: string[] = ["rgb(80, 80, 178)", "rgb(76, 76, 179)", "rgb(72, 72, 160)"]

    const fuzzyKittensInfoButton = () => {
        return (
            <RoundedButton text="Learn More" link="./" />
        )
    }
    const lBlDemoButton = () => {
        return (
            <NewWindowRoundedButton text="Demo" link="./" />
        )
    }
    const lblInfoButton = () => {
        return (
            <RoundedButton text="Learn More" link="./" />
        )
    }

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
                                    ? () => <NewWindowRoundedButton text="Demo" link={project.demo} />
                                    : null
                            }
                            backgroundColor={backgroundColours[index % backgroundColours.length]}
                            LearnMoreButton={null} />
                    )
                })}
            {/* })} */}
            {/* <Project imageUrl={loomByLightImage} title="Loom by Light" description="LBL project." backgroundColor="rgb(80, 80, 178)" DemoButton={lBlDemoButton} LearnMoreButton={lblInfoButton} />
            <Project imageUrl={fuzzyKittensImage} title="Fuzzy Kittens" description="A cool project." backgroundColor="rgb(76, 76, 179)" DemoButton={null} LearnMoreButton={fuzzyKittensInfoButton} />
            <Project imageUrl={aScienceOfRealmsImage} title="A Science of Realms" description="Award winning game" backgroundColor="rgb(72, 72, 160)" DemoButton={null} LearnMoreButton={null} /> */}
        </div>
    )
}