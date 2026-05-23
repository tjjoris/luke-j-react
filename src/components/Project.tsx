import type { ComponentType } from "react";
import "../assets/css/portfolio.css"
import RoundedButton from "./RoundedButton";


type PrivateProps = {
    imageUrl: string
    title: string
    description: string
    backgroundColor: string
    DemoButton: React.ComponentType | null
    LearnMoreButton: null | React.ComponentType
}

export default function Project({ imageUrl, title, description, backgroundColor, DemoButton, LearnMoreButton }: PrivateProps) {


    return (
        <div className="project" style={{ backgroundColor }}>
            <img className="project-image" src={imageUrl} alt={title} />
            <div className="project-info">
                <h3 className="project-title"> {title} </h3>
                <p className="project-description"> {description} </p>
                <div className="project-buttons">
                    {DemoButton && <DemoButton />}
                    {LearnMoreButton && <LearnMoreButton />}
                </div>
            </div>
        </div>
    )
}