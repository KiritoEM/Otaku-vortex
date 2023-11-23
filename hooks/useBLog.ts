import React, { useState } from "react";

export default function useBlog() {
    //blog state
  const [blog, setBLog] = useState([]);

  //state exporation
  return { blog, setBLog };
}
