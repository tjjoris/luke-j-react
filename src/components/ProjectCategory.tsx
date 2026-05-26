import ProjectSelected from "./ProjectSelected";

export default function ProjectCategory({ name, setCategory, selected }: { name: string, setCategory: (category: string) => void, selected: string }) {
    const isSelected = selected === name;
    return (
        <>
            <button className="project-category" onClick={() => setCategory(name)}>
                {name}

                {isSelected && <ProjectSelected />}
            </button>
        </>
    )
}