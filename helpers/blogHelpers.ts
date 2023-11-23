import { useCallback, useEffect } from "react";
import axios from "axios";
import useBlog from "@/hooks/useBLog";

export default function blogHelpers() {
  const fetchBlogs = async () => {
    try {
      const response = await fetch("http://localhost:8000/blog/get");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erreur lors de la récupération des blogs", error);
      throw error; 
    }
  };
}
