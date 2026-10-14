import type { ReactNode } from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { CategoryName } from "../types/categoryName";

//this is the type for the props, which contains children of type react nodes.
type WrapperProps = {
	children: ReactNode;
	categoryName: CategoryName;
	setSelectCategoryBoolArray: (categoryName: CategoryName, value: boolean) => {};
	thresholdValue: number;
}

//scroll observer uses useInView to track if the element is visible in the viewport. inView is the boolean value of if it's in view.
export default function ScrollObserver({ children, categoryName, setSelectCategoryBoolArray, thresholdValue }:WrapperProps) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: thresholdValue,
  });

  //useEffect to trigger when inView changes ( the browser scrolls the div into view.
  useEffect(() => {
	  //call the function in the parent passing it the category name of this component and if the in view is true or false.
	setSelectCategoryBoolArray(categoryName, inView);
  }, [inView]);

  entry;
  return (
    <div ref={ref}>
      <h2>{`Header inside viewport ${inView}.`}</h2>
      { children }
      <h2>{`Header inside viewport ${inView}.`}</h2>
    </div>
  );
};
