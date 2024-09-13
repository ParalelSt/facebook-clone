import { useEffect } from "react";

function useBodyClass(className: string) {
  useEffect(() => {
    document.body.classList.add(className);

    return () => {
      document.body.classList.remove(className);
    };
  }, [className]);

  return <></>;
}

export default useBodyClass;
