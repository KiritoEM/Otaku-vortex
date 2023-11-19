import React, { useState } from "react";

export default function useLoader() {
    //loader state
  const [loading, setLoading] = useState(true);

  //state exporation
  return { loading, setLoading };
}
