import "../assets/css/popup.css";
import { type LearnMore } from "../types/learnMore";
import ActionRoundedButton from "./ActionRoundedButton";
import { openLinkInNewTab } from "../functions/openLinkInNewTab";

export default function Popup({ learnMore }: { learnMore: LearnMore }) {

    return (

        <div className="popup">
            <h2>{learnMore.name}</h2>
            <p>{learnMore.info}</p>
            <div className="popup-links">
                {
                    //check if learnmore links exist, if they do display button for each link.
                    learnMore.links &&
                    learnMore.links.map((link, index) => (
                        link ? (
                            <ActionRoundedButton key={index} action={() => openLinkInNewTab(link.url)} text={link.name} />
                        ) : null
                    ))}
            </div>
        </div>
    )
}