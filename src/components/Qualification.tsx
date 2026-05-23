import "../assets/css/qualifications.css"
export default function Qualification({ name, description, iconUrl }: { name: string, description: string, iconUrl: string }) {
    return (
        <section className="qualification">
            <img src={iconUrl} alt={name} className="qualification-icon" />
            <div className="qualification-info">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </section >

    )
}