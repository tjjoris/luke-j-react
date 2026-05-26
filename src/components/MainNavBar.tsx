import NavItem from "./NavItem";
import '../assets/css/nav-bar.css';
import { useState } from "react";
import MainNavBarSelected from "./MainNavBarSelected";

export default function MainNavBar() {
    const [selectedCategory, setSelectedCategory] = useState<string>("portfolio");
    return (
        <section id="sidebar">
            <div className="mainNavBar">
                <ul>
                    <NavItem setSelectedCategory={setSelectedCategory} link="#about-me" name="About Me" />
                    <NavItem setSelectedCategory={setSelectedCategory} link="#portfolio" name="Portfolio" />
                    <NavItem setSelectedCategory={setSelectedCategory} link="#qualifications" name="Qualifications" />
                    <NavItem setSelectedCategory={setSelectedCategory} link="#contact" name="Contact" />
                </ul>
                <MainNavBarSelected category={selectedCategory} />
            </div>
        </section>
    )
}