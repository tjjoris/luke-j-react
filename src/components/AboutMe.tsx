import '../assets/css/about-me.css';
import "../assets/css/button.css";
import ActionRoundedButton from "./ActionRoundedButton";

export default function AboutMe({ action }: { action: () => void }) {
    return (
        < div className="about-me" >
            <h1 >Luke Johnson</h1>
            <p>I'm a recent Graduate from Algonquin College Computer Programming,
                with a strong passion for software and web development.</p>
            <ActionRoundedButton text="Learn More" action={action} />
        </div >
    )
}