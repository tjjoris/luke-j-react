import NavItem from "./NavItem";
import '../assets/css/nav-bar.css';
import { useState } from "react";
import MainNavBarSelected from "./MainNavBarSelected";

export default function MainNavBar() {
    const [selectedCategory, setSelectedCategory] = useState<string>("about-me");
    return (
        <section id="sidebar">
            <div className="mainNavBar">
                <ul>
                    <NavItem setSelectedCategory={setSelectedCategory} category="about-me" name="About Me" />
                    <NavItem setSelectedCategory={setSelectedCategory} category="portfolio" name="Portfolio" />
                    <NavItem setSelectedCategory={setSelectedCategory} category="qualifications" name="Qualifications" />
                    <NavItem setSelectedCategory={setSelectedCategory} category="contact" name="Contact" />
                </ul>
                <MainNavBarSelected category={selectedCategory} />
            </div>
        </section>
    )
}