import Project from "./Project";
import loomByLightImage from "../assets/images/loom-by-light.jpg";
import fuzzyKittensImage from "../assets/images/fuzzy-kittens-login.png"
import aScienceOfRealmsImage from "../assets/images/science-of-realms-cover-image2.png"
import RoundedButton from "./RoundedButton";
import NewWindowRoundedButton from "./NewWindowRoundedButton";
import ProjectBar from "./ProjectBar";
import { useState } from "react";


export default function Portfolio() {
    const [category, setCategory] = useState("React/Front-end");

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
            {category}
            <ProjectBar setCategory={setCategory} />
            <Project imageUrl={loomByLightImage} title="Loom by Light" description="LBL project." backgroundColor="rgb(80, 80, 178)" DemoButton={lBlDemoButton} LearnMoreButton={lblInfoButton} />
            <Project imageUrl={fuzzyKittensImage} title="Fuzzy Kittens" description="A cool project." backgroundColor="rgb(76, 76, 179)" DemoButton={null} LearnMoreButton={fuzzyKittensInfoButton} />
            <Project imageUrl={aScienceOfRealmsImage} title="A Science of Realms" description="Award winning game" backgroundColor="rgb(72, 72, 160)" DemoButton={null} LearnMoreButton={null} />
        </div>
    )
}