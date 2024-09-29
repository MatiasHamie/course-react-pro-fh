import gsap from "gsap";
import { useState, useRef, useEffect, useLayoutEffect } from "react";

export const useCounter = ({ maxCount = 10 }) => {
  const [counter, setCounter] = useState(maxCount);

  const elementToAnimate = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    setCounter((prevValue) => Math.min(prevValue + 1, maxCount));
  };

  const timeline = useRef(gsap.timeline());

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;

    timeline.current
      .to(elementToAnimate.current, {
        duration: 0.2,
        y: -10,
        ease: "ease.out",
      })
      .to(elementToAnimate.current, {
        duration: 1,
        y: 0,
      })
      .pause();
  }, []);

  useEffect(() => {
    timeline.current.play(0);
  }, [counter]);

  return {
    counter,
    elementToAnimate,
    handleClick,
  };
};
