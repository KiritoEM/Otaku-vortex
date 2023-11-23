import "./../styles/global.scss";
import type { AppProps } from "next/app";
import useLoader from "@/hooks/useLoader";
import Loader from "@/components/Loader";
import { useEffect } from "react";
import AppProvider from "@/provider/AppProvider";
import Route from "@/provider/Route";

export default function App({ Component, pageProps }: AppProps) {
  //Appel du state Loader
  const { loading, setLoading } = useLoader();

  //Appel du Loader
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1420);
  }, [loading]);

  return (
    <Route>
      <AppProvider>
        {loading ? <Loader /> : null}
        <Component {...pageProps} />
      </AppProvider>
    </Route>
  );
}
