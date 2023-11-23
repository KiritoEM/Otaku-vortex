import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

interface IChildren {
  children: ReactNode;
}

let token: string | null;

const Route: React.FC<IChildren> = ({ children }): JSX.Element => {
  const router = useRouter();
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/");
    } else {
      if (token && router.pathname === "/") {
        router.push("/dashboard");
      }
    }
  }, []);

  return <>{children}</>;
};

export default Route;
