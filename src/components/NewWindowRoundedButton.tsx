export default function RoundedButton({ text, link }: { text: string, link: string }) {
    return (
        <button className="button" onClick={() => { window.open(link, "_blank") }}>{text}</button>
    )
}