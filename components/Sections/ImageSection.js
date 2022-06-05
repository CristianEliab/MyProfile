import React, { useEffect, useState } from "react";

export default function ImageSection(props) {
  const [updateNav, setUpdateNav] = useState(false);
  const subjects = ["Developer", "FullStack", "Lol Player"];
  const [skill, setSkill] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setUpdateNav(true);
    } else {
      setUpdateNav(false);
    }
  };

  useEffect(() => {
    // start the text animation
    StartTextAnimation(0);
    return () => {};
  }, []);

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      setSkill(text.substring(0, i + 1));

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof subjects[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 2000);
    }
    if (i < subjects.length) {
      typeWriter(subjects[i], 0, function () {
        StartTextAnimation(i + 1);
      });
    }
  }

  return (
    <section className="bg-blue-800 h-screen">
      <section className="home">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">Cristian Eliab</div>
          <div className="text-3">
            And I'm a <span>{skill}</span>
          </div>
        </div>
      </section>
      <style jsx>{`
        .home {
          display: flex;
          background: url("https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80");
          height: 100vh;
          color: #fff;
          border-radius: 100px;
          background-position: right center;
          background-repeat: no-repeat;
          font-family: "Ubuntu", sans-serif;
        }

        .home .home-content {
          margin: auto 0 auto 40px;
        }

        .home .home-content .text-1 {
          font-size: 27px;
        }

        .home .home-content .text-2 {
          font-size: 75px;
          font-weight: 600;
          margin-left: -3px;
        }

        .home .home-content .text-3 {
          font-size: 40px;
          margin: 5px 0;
        }

        .home .home-content .text-3 span {
          color: #000000;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}
