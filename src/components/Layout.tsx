import AboutMe from "./AboutMe";
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
        </>
    )
}