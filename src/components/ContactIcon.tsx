type Props = {
    iconPath: string;
    link: string;
}

export default function ContactIcon ({iconPath, link}: Props) {
    return (
	<a href={link} target="_blank" rel="noopener noreferrer">
	    <img className="icon" src={iconPath} />
	</a>
    )
}
