import { useEffect } from "react";

const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
};

export default useScrollToTop;
