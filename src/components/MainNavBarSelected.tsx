import "../assets/css/nav-bar.css";
import type { CategoryName } from "../types/categoryName";

export default function MainNavBarSelected({ category }: { category: CategoryName }) {
    const className = "main-nav-bar-selected main-nav-bar-selected--" + category.toLowerCase();
    return (
        <div className={className}></div>
    )
}
