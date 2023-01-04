import {
  useEffect,
  useRef,
  useState,
} from "react";

export const useIntersectionObserver = (
  options
) => {
  const containerRef = useRef();
  const [inView, setInView] =
    useState(false);

  const callback = (entries) => {
    const [entry] = entries;
    setInView(entry.isIntersecting);
  };

  useEffect(() => {
    const observer =
      new IntersectionObserver(
        callback,
        options
      );
    if (containerRef.current)
      observer.observe(
        containerRef.current
      );

    return () => {
      if (containerRef.current)
        observer.unobserve(
          containerRef.current
        );
    };
  }, [containerRef, options]);

  return {
    containerRef: containerRef,
    inView: inView,
  };
};
