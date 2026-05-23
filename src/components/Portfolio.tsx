import Project from "./Project";
import loomByLightImage from "../assets/images/loom-by-light.jpg";
import fuzzyKittensImage from "../assets/images/fuzzy-kittens-login.png"

export default function Portfolio() {
    return (
        <div className="portfolio">
            <Project imageUrl={loomByLightImage} title="Loom by Light" description="LBL project." />
            <Project imageUrl={fuzzyKittensImage} title="Fuzzy Kittens" description="A cool project." />
        </div>
    )
}