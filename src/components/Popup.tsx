import "../assets/css/popup.css";
import { type LearnMore } from "../types/learnMore";
import ActionRoundedButton from "./ActionRoundedButton";
import { openLinkInNewTab } from "../functions/openLinkInNewTab";

export default function Popup({ learnMore }: { learnMore: LearnMore }) {

    return (

        <div className="popup">
            <h2>{learnMore.name}</h2>
            <p>{learnMore.info}</p>
            {learnMore.links.map((link, index) => (
                <ActionRoundedButton key={index} action={() => openLinkInNewTab(link.url)} text={link.name} />
            ))}
        </div>
    )
}