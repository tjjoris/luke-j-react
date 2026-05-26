export default function NavItem({ category, name, setSelectedCategory }: { category: string, name: string, setSelectedCategory: (name: string) => void }) {
    const link = "#" + category;
    return (
        <li><a href={link} onClick={() => setSelectedCategory(category)}>{name}</a></li>
    )

}