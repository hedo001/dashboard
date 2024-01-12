"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "/dashboard/design/team";
  }, []);
  // return(
  //   <main>
  //     <h2>Dashboard</h2>
  //   </main>
  // )
}
