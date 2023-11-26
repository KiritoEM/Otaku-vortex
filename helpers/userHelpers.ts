import { useCallback, useEffect } from "react";
import axios from "axios";
let token: string | null;
if (typeof window !== "undefined") {
  token = localStorage.getItem("token");
}

export default function userHelpers() {
  const fetchUser = async () => {
    try {
      const response = await axios.get("https://backend-server-of-otaku-vortex.vercel.app/user", {
        headers: {
          Authorization: `${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des informations de l' utilisateur",
        error
      );
      throw error;
    }
  };

  return { fetchUser };
}
