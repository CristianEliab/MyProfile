import React, { useEffect, useState } from "react";

export default function ImageSection(props) {
  const [updateNav, setUpdateNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    console.log("scroll event", window.scrollY);
    if (window.scrollY > 20) {
      setUpdateNav(true);
    } else {
      setUpdateNav(false);
    }
  };

  return (
    <section className="bg-blue-800 w-full mb-10 flex h-screen">
      <img
        alt="..."
        src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
        className={
          updateNav
            ? "rounded-full mx-auto shadow-xl z-0"
            : "rounded-full mx-auto shadow-xl z-20"
        }
      />
    </section>
  );
}
