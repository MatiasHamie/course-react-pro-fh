import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

type Props = {
  initialValue?: number;
};

const MAXIMUM_COUNT = 10;

export const CounterEffect = ({ initialValue = 0 }: Props) => {
  const [counter, setCounter] = useState(initialValue);

  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    setCounter((prevValue) => Math.min(prevValue + 1, MAXIMUM_COUNT));
  };

  useEffect(() => {
    if (counter < MAXIMUM_COUNT) return;

    const timeline = gsap.timeline();

    timeline.to(counterElement.current, {
      duration: 0.2,
      y: -10,
      ease: "ease.out",
    });
    timeline.to(counterElement.current, {
      duration: 1,
      y: 0,
      ease: "bounce.out",
    });
  }, [counter]);

  return (
    <>
      <h2 ref={counterElement}>CounterEffect: {counter}</h2>

      <button onClick={handleClick}>+1</button>
    </>
  );
};
