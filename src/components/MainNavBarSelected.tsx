import "../assets/css/nav-bar.css";

export default function MainNavBarSelected({ category }: { category: string }) {
    const className = "main-nav-bar-selected main-nav-bar-selected--" + category.toLowerCase();
    return (
        <div className={className}></div>
    )
}