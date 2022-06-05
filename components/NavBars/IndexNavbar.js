import React, { useEffect, useState } from "react";
import Logo from "../Icons/Logo";

// import the icons you need
import GitHub from "../Icons/GitHub";
import Linkedin from "../Icons/Linkedin";

export default function Navbar({ user }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [updateNav, setUpdateNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setUpdateNav(true);
    } else {
      setUpdateNav(false);
    }
  };

  return (
    <>
      <nav
        className={
          updateNav
            ? "top-0 left-0 fixed z-10 w-full flex flex-wrap items-center justify-between p-4 navbar-expand-lg bg-white shadow transition-all ease-out"
            : "top-0 left-0 fixed z-10 w-full flex flex-wrap items-center justify-between p-4 navbar-expand-lg bg-blue-800"
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="logo-title">
              <Logo width="24" fill={updateNav ? "#000" : "#fff"} />
              <p className="font-bold">Hi I'm Eliab</p>
            </div>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center mx-2">
                <a href="https://github.com/CristianEliab">
                  <GitHub fill="#000" width={46} height={46}></GitHub>
                </a>
              </li>
              <li className="flex items-center mx-2">
                <a href="https://linkedin.com/in/cristian-eliab">
                  <Linkedin></Linkedin>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <style jsx>{`
        .logo-title {
          display: flex;
          height: 100%;
          flex-direction: row;
          justify-content: space-between;
        }

        p {
          font-size: 24px;
          margin-left: 12px;
          font-weight: 600;
          color: ${updateNav ? "back" : "white"};
        }
      `}</style>
    </>
  );
}
