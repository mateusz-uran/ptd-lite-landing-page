import { useEffect, useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (isShowing) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isShowing]);

  function toggle(index) {
    setIsShowing(!isShowing);
    setActiveIndex(index);
  }

  return [isShowing, toggle, activeIndex];
};

export default useModal;
