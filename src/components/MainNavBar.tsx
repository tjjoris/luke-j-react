import NavItem from "./NavItem";
import '../assets/css/nav-bar.css';
import type { Dispatch, SetStateAction } from "react";
import MainNavBarSelected from "./MainNavBarSelected";
import type { CategoryName } from "../types/categoryName";
import { categoryNames } from "../consts/categoryNames";

type mainNavBarProps = {
	selectedCategory:CategoryName;
	setSelectedCategory:Dispatch<SetStateAction<CategoryName>>;
}

export default function MainNavBar({selectedCategory, setSelectedCategory}: mainNavBarProps) {
   // const [selectedCategory, setSelectedCategory] = useState<string>(categoryNames[0]);
    return (
        <section id="sidebar">
            <div className="mainNavBar">
                <ul>
                    <NavItem setSelectedCategory={setSelectedCategory} category="about-me" name="About Me" />
                    <NavItem setSelectedCategory={setSelectedCategory} category="portfolio" name="Portfolio" />
                    <NavItem setSelectedCategory={setSelectedCategory} category="qualifications" name="Qualifications" />
                    <NavItem setSelectedCategory={setSelectedCategory} category="contact" name="Contact" />
                </ul>
                <MainNavBarSelected category={selectedCategory}/>
            </div>
        </section>
    )
}
