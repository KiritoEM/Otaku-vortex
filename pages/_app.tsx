import "./../styles/global.scss";
import type { AppProps } from "next/app";
import useLoader from "@/hooks/useLoader";
import Loader from "@/components/Loader";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  //Appel du state Loader
  const { loading, setLoading } = useLoader();

  //Appel du Loader
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [loading]);

  return (
    <>
      {loading ? <Loader /> : null}
      <Component {...pageProps} />
    </>
  );
}
