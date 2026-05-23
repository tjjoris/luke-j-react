import NavItem from "./NavItem";

export default function MainNavBar() {
    return (
        <section id="sidebar">
            <div className="mainNavBar">
                <ul>
                    <NavItem link="#about-me" name="About Me" />
                    <NavItem link="#portfolio" name="Portfolio" />
                    <NavItem link="#qualifications" name="Qualifications" />
                    <NavItem link="#contact" name="Contact" />
                </ul>
            </div>
        </section>
    )
}