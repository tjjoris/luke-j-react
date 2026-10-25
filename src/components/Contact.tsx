import "../assets/css/contact.css";

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <h3>Contact</h3>
            <p>I'm open to networking, the best way to get in contact is via email.</p>

            <div className="contact-info">
                <h4>Email</h4>
                <a href="mailto:tjjoris@gmail.com">tjjoris@gmail.com</a>
		<div className="icons">
		    <a href="mailto:tjjoris@gmail.com">
			<img className="icon" src="icons/white/at-solid-full.svg" />
		    </a>
		    <img className="icon" src="icons/white/linkedin-brands-solid-full.svg" />
		    <img className="icon" src="icons/white/github-brands-solid-full.svg" />
		</div>
            </div>
        </div>
    )
}
