import { useInView } from "react-intersection-observer";
export default function ScrollObserver() {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  entry;
  return (
    <div ref={ref}>
      <h2>{`Header inside viewport ${inView}.`}</h2>
    </div>
  );
};
