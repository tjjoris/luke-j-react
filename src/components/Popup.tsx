import "../assets/css/popup.css";

export default function Popup({ title, description }: { title: string, description: string }) {

    return (

        <div className="popup">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}