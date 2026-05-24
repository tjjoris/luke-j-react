import '../assets/css/about-me.css';
import "../assets/css/button.css";
import ActionRoundedButton from "./ActionRoundedButton";
import aboutMe from "../assets/data/aboutMe.json";
import { useContext } from "react";
import { PopupContext } from "../contexts/popupContext";

export default function AboutMe() {
    const popupContext = useContext(PopupContext);
    return (
        < div className="about-me" id="about-me">
            <h1 >Luke Johnson</h1>
            <p>I'm a recent Graduate from Algonquin College Computer Programming,
                with a strong passion for software and web development.</p>
            <ActionRoundedButton text="Learn More" action={() => popupContext?.setPopup(aboutMe)} />
        </div >
    )
}