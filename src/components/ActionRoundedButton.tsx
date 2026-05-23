export default function RoundedButton({ text, action }: { text: string, action: () => void }) {
    return (
        <button className="button" onClick={action}>{text}</button>
    )
}