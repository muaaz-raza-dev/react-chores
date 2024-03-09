import { useState } from "react";

const useToggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  const setToggleTrue = () => {
    setIsToggled(true);
  };

  const setToggleFalse = () => {
    setIsToggled(false);
  };

  return { isToggled, toggle, setToggleTrue, setToggleFalse };
};

export default useToggle;


