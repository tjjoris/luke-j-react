import type { ReactNode } from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { CategoryName } from "../types/categoryName";

//this is the type for the props, which contains children of type react nodes.
type WrapperProps = {
	children: ReactNode;
	categoryName: CategoryName;
	setSelectCategoryBoolArray: (categoryName: CategoryName, value: boolean) => void;
	thresholdValue: number;
}

//scroll observer uses useInView to track if the element is visible in the viewport. inView is the boolean value of if it's in view.
export default function ScrollObserver({ children, categoryName, setSelectCategoryBoolArray, thresholdValue }:WrapperProps) {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: thresholdValue,
  });

  // Notify the parent whenever this section enters or leaves the viewport.
  useEffect(() => {
    setSelectCategoryBoolArray(categoryName, inView);
  }, [categoryName, inView, setSelectCategoryBoolArray]);

  return (
    <div ref={ref}>
      { children }
    </div>
  );
};
