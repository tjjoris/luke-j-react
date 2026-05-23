import AboutMe from "./AboutMe";
import Contact from "./Contact";
import MainNavBar from "./MainNavBar";
import Popup from "./Popup";
import Portfolio from "./Portfolio";
import Qualifications from "./Qualifications";
import { useRef, useState, useEffect } from "react";

export default function Layout() {
    const [navSection, setNavSection] = useState();
    const popupRef = useRef<HTMLDivElement | null>(null);
    const [popup, setPopup] = useState<{ title: string, description: string } | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setPopup(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <>
            {popup && (
                <div ref={popupRef} >
                    <Popup title={popup.title} description={popup.description} />
                </div>
            )}
            <MainNavBar />
            <AboutMe action={() => setPopup({ title: "Popup Title", description: "This is a popup description." })} />
            <Portfolio />
            <Qualifications />
            <Contact />
        </>
    )
}