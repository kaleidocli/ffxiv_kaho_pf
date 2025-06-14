import { useEffect, useRef } from 'react';

/**
 * A custom hook that uses the Intersection Observer API to call a callback
 * when a component scrolls into the viewport.
 * @param {function} callback - The function to call when the element is in view.
 * @param {any} valueToReturn - The value to pass to the callback function.
 * @returns {ref} - A ref to be attached to the element you want to observe.
 */
const useInView = (callback, valueToReturn) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // When the entry is intersecting (visible), call the callback
                if (entry.isIntersecting) {
                    callback(valueToReturn);
                }
            },
            {
                // The element is considered "in view" when x% of it is visible
                threshold: 0.2,
            }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        // Cleanup function to disconnect the observer when the component unmounts
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [callback, valueToReturn]); // Rerun effect if callback or value changes

    return sectionRef;
};

export default useInView;
