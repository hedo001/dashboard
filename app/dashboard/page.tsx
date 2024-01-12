"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "/dashboard/design";
  }, []);
  // return(
  //   <main>
  //     <h2>Dashboard</h2>
  //   </main>
  // )
}
