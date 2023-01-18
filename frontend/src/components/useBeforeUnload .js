import { useEffect } from "react";

const useDeleteOnUnmount = (callback) => {
  useEffect(() => {
    return () => callback();
  }, [callback]);
};

export default useDeleteOnUnmount;
