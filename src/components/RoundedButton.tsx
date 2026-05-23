export default function RoundedButton({ text, link }: { text: string, link: string }) {
    return (
        // <button className="button">{text}</button>
        <a href={link} className="button">{text}</a>
    )
}