import AboutMe from "./AboutMe";
import Contact from "./Contact";
import MainNavBar from "./MainNavBar";
import Portfolio from "./Portfolio";
import Qualifications from "./Qualifications";

export default function Layout() {
    return (
        <>
            <MainNavBar />
            <AboutMe />
            <Portfolio />
            <Qualifications />
            <Contact />
        </>
    )
}