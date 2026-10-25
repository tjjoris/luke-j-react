import "../assets/css/contact.css";
import ContactIcon from "./ContactIcon";

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <h3>Contact</h3>
            <p>I'm open to networking, the best way to get in contact is via email.</p>

            <div className="contact-info">
                <h4>Email</h4>
                <a href="mailto:tjjoris@gmail.com">tjjoris@gmail.com</a>
		<div className="icons" >
		    <ContactIcon iconPath="icons/white/at-solid-full.svg" link="mailto:tjjoris@gmail.com" />
		    <a href="mailto:tjjoris@gmail.com" >
			<img className="icon" src="icons/white/at-solid-full.svg" />
		    </a>
		    <a href="https://www.linkedin.com/in/luke-johnson-172b25110/" target="_blank" rel="noopener noreferrer">
			<img className="icon" src="icons/white/linkedin-brands-solid-full.svg" />
		    </a>
		    <img className="icon" src="icons/white/github-brands-solid-full.svg" />
		</div>
            </div>
        </div>
    )
}
