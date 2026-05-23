import "../assets/css/portfolio.css"

export default function Project({ imageUrl, title, description }: { imageUrl: string, title: string, description: string }) {
    return (
        <div className="project">
            <img className="project-image" src={imageUrl} alt={title} />
            <h3 className="project-title"> {title} </h3>
            <p className="project-description"> {description} </p>
        </div>
    )
}