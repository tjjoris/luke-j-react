import "../assets/css/portfolio.css"
import { type LearnMore } from "../types/learnMore";
import { useContext } from "react";
import { PopupContext } from "../contexts/popupContext";
import ActionRoundedButton from "./ActionRoundedButton";

function resolvePublicImagePath(imageUrl: string) {
    if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
        return imageUrl;
    }

    const normalizedPath = imageUrl.replace(/^\/+/, '').replace(/^public\//, '');
    return `${import.meta.env.BASE_URL}${normalizedPath}`;
}



type PrivateProps = {
    imageUrl: string
    title: string
    description: string
    backgroundColor: string
    DemoButton: React.ComponentType | null
    LearnMore: null | LearnMore
}

export default function Project({ imageUrl, title, description, backgroundColor, DemoButton, LearnMore }: PrivateProps) {
    const popupContext = useContext(PopupContext);
    const resolvedImageUrl = resolvePublicImagePath(imageUrl);

    return (
        <div className="project" style={{ backgroundColor }}>
            <img className="project-image" src={resolvedImageUrl} alt={title} />
            <div className="project-info">
                <h3 className="project-title"> {title} </h3>
                <p className="project-description"> {description} </p>
                <div className="project-buttons">
                    {DemoButton && <DemoButton />}
                    {LearnMore && <ActionRoundedButton text="Learn More" action={() => popupContext?.setPopup(LearnMore)} />}

                </div>
            </div>
        </div>
    )
}