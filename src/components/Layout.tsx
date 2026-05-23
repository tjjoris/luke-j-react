import AboutMe from "./AboutMe";
import Contact from "./Contact";
import MainNavBar from "./MainNavBar";
import Popup from "./Popup";
import Portfolio from "./Portfolio";
import Qualifications from "./Qualifications";
import { useState } from "react";

export default function Layout() {

    const [popup, setPopup] = useState<{ title: string, description: string } | null>(null);

    return (
        <>
            {popup && <Popup title={popup.title} description={popup.description} />}
            <MainNavBar />
            <AboutMe action={() => setPopup({ title: "Popup Title", description: "This is a popup description." })} />
            <Portfolio />
            <Qualifications />
            <Contact />
        </>
    )
}