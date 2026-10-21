import type { CategoryName } from "../types/categoryName";
export default function NavItem({ category, name, setSelectedCategory }: { category: CategoryName, name: string, setSelectedCategory: (name: CategoryName) => void }) {
    const link = "#" + category;
    return (
        <li><a href={link} onClick={() => setSelectedCategory(category)}>{name}</a></li>
    )

}
