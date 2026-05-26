import "../assets/css/project-bar.css";
export default function ProjectSelected({ selected }: { selected: boolean }) {

    const myClassName = selected ? "select-bar--project-selected" : "select-bar--project-unselected";
    return (
        <div className={myClassName} />
    )
}