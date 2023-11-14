import { useLayoutEffect } from "react";
import useLoader from "@/hooks/useLoader";

export default function LoaderHelper() {
  const { setLoading, loading } = useLoader();

  useLayoutEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      setLoading(false);
    };
  }, [loading, setLoading]);
}
