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
	//array of strings storing category names
	const categoryNames: string[] = ["about-me", "portfolio", "qualifications", "contact"];

	// state for tracking what category is currently selected
    const [selectedCategory, setSelectedCategory] = useState<string>("about-me");

    //state array for boolean categories
	//TODO:	this should be a useRef not useState
    //TODO: use categoryNames array for the key names instead of hard coded strings.
//const [selectedCategoryBoolArray, setSelectCategoryBoolArray] = useState<Record<CategoryName, boolean>>({"about-me": false, "portfolio": false, [categoryNames[2]] : false, [categoryNames[3]]: false} );

//map all the records basing the key on the array of categories and set the value to false.
const [selectedCategoryBoolArray, setSelectCategoryBoolArray] = useState<Record<string, boolean>>  (Object.fromEntries(categoryNames.map(categoryName => [categoryName, false])));


	//check which category is in the viewport. do this when a viewport observer has changed. this is based on the one which has just changed, because if the changed one is false, it gets the next or previous that is true and sets it to that. if it is true, it changes it to that.
    function checkWhichVeiwportIsInView(viewportChanged: string, value: boolean) {
	
    }

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
