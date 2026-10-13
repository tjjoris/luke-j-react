import AboutMe from "./AboutMe";
import Contact from "./Contact";
import MainNavBar from "./MainNavBar";
import Popup from "./Popup";
import Portfolio from "./Portfolio";
import Qualifications from "./Qualifications";
import { useRef, useState, useEffect } from "react";
import { PopupContext } from "../contexts/popupContext";
import { type LearnMore } from "../types/learnMore";
import ScrollObserver from "./ScrollObserver";

export default function Layout() {
	//array for all functions to check if category is 
	let trueCategoriesCheckers = [];

	// state for tracking what category is currently selected
    const [selectedCategory, setSelectedCategory] = useState<string>("about-me");

    //state array for boolean categories
    const [selectedCategoryBoolArray, setSelectCategoryBoolArray] = useState<boolean[]>([false, false, false, false]);

    //function for checking if category is set to true when one is set to false
    function checkWhichCatergoyrIsTrue() {
	
    }

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


    const popupRef = useRef<HTMLDivElement | null>(null);
    const [popup, setPopup] = useState<LearnMore | null>(null);


    return (
        <>
            <PopupContext.Provider value={{ popup, setPopup }}>
                {popup && (
                    <div ref={popupRef} >
                        <Popup learnMore={popup} />
                    </div>
                )}
                <MainNavBar />
		<ScrollObserver >
                	<AboutMe />
		</ScrollObserver >
		<ScrollObserver >
                	<Portfolio />
		</ScrollObserver >
		<ScrollObserver >
                	<Qualifications />
		</ScrollObserver >
		<ScrollObserver >
                	<Contact />
		</ScrollObserver >
            </PopupContext.Provider >
        </>
    )
}
