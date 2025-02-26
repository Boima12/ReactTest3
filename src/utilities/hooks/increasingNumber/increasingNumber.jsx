import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";

function Co_animatedNumber({
  targetNumber = 100,
  duration = 2000,
  beforeText = "",
  afterText = "",
}) {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation started
  const numberRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          startAnimation();
          setHasAnimated(true);
          observer.disconnect(); // Stop observing after animation starts
        }
      },
      { threshold: 0.5 } // Trigger when at least 50% is visible
    );

    if (numberRef.current) {
      observer.observe(numberRef.current);
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasAnimated]);

  const startAnimation = () => {
    const startTime = performance.now();

    function updateNumber(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const newNumber = Math.floor(progress * targetNumber);

      setCurrentNumber(newNumber);

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    }

    requestAnimationFrame(updateNumber);
  };

  return (
    <p ref={numberRef}>
      {beforeText}
      {currentNumber}
      {afterText}
    </p>
  );
}

Co_animatedNumber.propTypes = {
  targetNumber: PropTypes.number,
  duration: PropTypes.number,
  beforeText: PropTypes.string,
  afterText: PropTypes.string,
};

export default Co_animatedNumber;
