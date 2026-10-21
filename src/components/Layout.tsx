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
import { categoryNames } from "../consts/categoryNames";
import type { CategoryName } from "../types/categoryName";

export default function Layout() {

//alert("rerender");
//	state for tracking what category is currently selected
	const [selectedCategory, setSelectedCategory] = useState<string>(categoryNames[0]);

    //state array for boolean categories
	//TODO:	this should be a useRef not useState
//map all the records basing the key on the array of categories and set the value to false.
//const [selectedCategoryBoolArray, setSelectCategoryBoolArray] = useState<Record<CategoryName, boolean>>  (Object.fromEntries(categoryNames.map(categoryName => [categoryName, false])));

//the ref for storing boolen values for each category.
const selectedCategoryBoolRef = useRef<Record<CategoryName, boolean>>  (Object.fromEntries(categoryNames.map(categoryName => [categoryName, false])));

//sets the value of the boolean ref for categories to boolean value.
function setCategoryBooleanRefValue(key:CategoryName, value: boolean) {
	selectedCategoryBoolRef.current[key] = value;
};


	//check which category is in the viewport. do this when a viewport observer has changed. this is based on the one which has just changed, because if the changed one is false, it gets the next or previous that is true and sets it to that. if it is true, it changes it to that.
    function checkWhichViewportIsInView (viewportChanged: CategoryName, value: boolean) {
	    	setCategoryBooleanRefValue(viewportChanged, value);
		//alert(viewportChanged);
		//console.log("viewport ", viewportChanged, " value ", value);
    	if (value) {
		setSelectedCategory(viewportChanged);
	}
	else {
		//store an array of keys
		const keys = Object.keys(selectedCategoryBoolRef.current);
		//find the index of the starting key
		const startIndex = keys.indexOf(viewportChanged);
		//loop forward, if a category is true, set category and return.
		for (let i=startIndex; i<=keys.length; i++) {
			const key = keys[i];
			const categoryAtIndex = selectedCategoryBoolRef.current[key] 
			if (categoryAtIndex == true) {
				setSelectedCategory(key);
				return;
			};
		};
		//loop backwards, if a category is true, set category and return.
		for (let i=startIndex; i>=0; i--) {
			const key = keys[i];
			const categoryAtIndex = selectedCategoryBoolRef.current[key] 
			if (categoryAtIndex == true) {
				setSelectedCategory(key);
				return;
			};
		};

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
                <MainNavBar 
		selectedCategory={selectedCategory}
		setSelectedCategory={setSelectedCategory} />
		<ScrollObserver 
		categoryName={categoryNames[0] }
		setSelectCategoryBoolArray={checkWhichViewportIsInView}
		thresholdValue={0.1}
		> 
                	<AboutMe />
		</ScrollObserver >
		<ScrollObserver 
			categoryName={categoryNames[1]}
			setSelectCategoryBoolArray={checkWhichViewportIsInView}
			thresholdValue={0.1}
		>
                	<Portfolio />
		</ScrollObserver >
		<ScrollObserver 
			categoryName={categoryNames[2]}
			setSelectCategoryBoolArray={checkWhichViewportIsInView}
			thresholdValue={0.1}
		>
                	<Qualifications />
		</ScrollObserver >
		<ScrollObserver 
			categoryName={categoryNames[3]}
			setSelectCategoryBoolArray={checkWhichViewportIsInView}
			thresholdValue={0.1}

		>
                	<Contact />
		</ScrollObserver >
            </PopupContext.Provider >
        </>
    )
}
