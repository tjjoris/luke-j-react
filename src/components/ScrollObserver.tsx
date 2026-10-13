import type { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

//this is the type for the props, which contains children of type react nodes.
type WrapperProps = {
	children: ReactNode;
	categoryChecker: () => {};
}
export default function ScrollObserver({ children }:WrapperProps) {

	function isCategoryTrue(): boolean {
		return inView;
	};
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  entry;
  return (
    <div ref={ref}>
      <h2>{`Header inside viewport ${inView}.`}</h2>
      { children }
      <h2>{`Header inside viewport ${inView}.`}</h2>
    </div>
  );
};
