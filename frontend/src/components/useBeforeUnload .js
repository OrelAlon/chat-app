import { useEffect } from "react";

const useBeforeUnload = (callback) => {
  useEffect(() => {
    window.addEventListener("beforeunload", callback);
    return () => window.removeEventListener("beforeunload", callback);
  }, [callback]);
};

export default useBeforeUnload;
