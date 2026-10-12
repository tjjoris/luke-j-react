import type { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

//this is the type for the props, which contains children of type react nodes.
type WrapperProps = {
	children: ReactNode;
}
export default function ScrollObserver({ children }:WrapperProps) {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  entry;
  return (
    <div ref={ref}>
      <h2>{`Header inside viewport ${inView}.`}</h2>
      { children }
    </div>
  );
};
