export default function ProjectCategory({ name }: { name: string }) {
    return (
        <button className="project-category">
            {name}
        </button>
    )
}