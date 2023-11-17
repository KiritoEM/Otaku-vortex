import "./../styles/global.scss";
import type { AppProps } from "next/app";
import useLoader from "@/helpers/hooks/useLoader";
import Loader from "@/components/Loader";
import { useEffect } from "react";
import AppProvider from "@/provider/AppProvider";

export default function App({ Component, pageProps }: AppProps) {
  //Appel du state Loader
  const { loading, setLoading } = useLoader();

  //Appel du Loader
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);

  return (
    <AppProvider>
      {loading ? <Loader /> : null}
      <Component {...pageProps} />
    </AppProvider>
  );
}
