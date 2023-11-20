import { useState } from "react";

export default function useAPI() {
  const [emailValue, setEmail] = useState("");

  return { emailValue, setEmail };
}
