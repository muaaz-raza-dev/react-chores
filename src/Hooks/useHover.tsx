import { RefObject, useEffect, useRef, useState } from "react";

const useHover = () => {
const [IsHovered, setIsHovered] = useState(false);
let ref:RefObject<HTMLButtonElement|HTMLElement|any> = useRef(null)

useEffect(() => {
    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const currentRef = ref.current;

    if (currentRef) {
      currentRef.addEventListener('mouseenter', handleMouseEnter);
      currentRef.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        currentRef.removeEventListener('mouseenter', handleMouseEnter);
        currentRef.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [ref]);
return {ref,IsHovered}
}

export { useHover}
