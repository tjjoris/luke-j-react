import "../assets/css/contact.css";
import ContactIcon from "./ContactIcon";

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <h3>Contact</h3>
            <p>I'm open to networking, the best way to get in contact is via email.</p>

            <div className="contact-info">
		<div className="icons" >
		    <ContactIcon iconPath="icons/white/at-solid-full.svg" link="mailto:tjjoris@gmail.com" />
		    <ContactIcon iconPath="icons/white/linkedin-brands-solid-full.svg" link="https://www.linkedin.com/in/luke-johnson-172b25110/" />
		    <ContactIcon iconPath="icons/white/github-brands-solid-full.svg" link="https://github.com/tjjoris" />
		</div>
            </div>
        </div>
    )
}
