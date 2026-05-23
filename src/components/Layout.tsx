import AboutMe from "./AboutMe";
import Contact from "./Contact";
import MainNavBar from "./MainNavBar";
import Popup from "./Popup";
import Portfolio from "./Portfolio";
import Qualifications from "./Qualifications";

export default function Layout() {
    return (
        <>
            <Popup title="Popup Title" description="This is a popup description." />
            <MainNavBar />
            <AboutMe />
            <Portfolio />
            <Qualifications />
            <Contact />
        </>
    )
}