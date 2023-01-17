import { useEffect } from "react";
import axios from "axios";

const useBeforeUnload = (callback) => {
  useEffect(() => {
    window.addEventListener("beforeunload", callback);
    return () => window.removeEventListener("beforeunload", callback);
  }, [callback]);
};

export default useBeforeUnload;
