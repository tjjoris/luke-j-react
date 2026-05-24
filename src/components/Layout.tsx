import AboutMe from "./AboutMe";
import Contact from "./Contact";
import MainNavBar from "./MainNavBar";
import Popup from "./Popup";
import Portfolio from "./Portfolio";
import Qualifications from "./Qualifications";
import { useRef, useState, useEffect, useContext } from "react";
import { PopupContext } from "../contexts/popupContext";
import { type LearnMore } from "../types/learnMore";

export default function Layout() {
    const [navSection, setNavSection] = useState();
    const popupRef = useRef<HTMLDivElement | null>(null);
    const [popup, setPopup] = useState<LearnMore | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                // setPopup(null);
                useContext(PopupContext)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <>
            <PopupContext.Provider value={{ popup, setPopup }}>
                {popup && (
                    <div ref={popupRef} >
                        <Popup learnMore={popup} />
                    </div>
                )}
                <MainNavBar />
                <AboutMe />
                <Portfolio />
                <Qualifications />
                <Contact />
            </PopupContext.Provider >
        </>
    )
}