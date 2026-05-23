export default function ProjectCategory({ name, setCategory }: { name: string, setCategory: (category: string) => void }) {
    return (
        <button className="project-category" onClick={() => setCategory(name)}>
            {name}
        </button>
    )
}