import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function About() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 700);
    setLoaded(false);
  }, []);

  return (
    <>
      <div
        className={`absolute w-full h-full -z-10 origin-top-left inset-0 bg-slate-900 ${
          loaded ? "skew-y-[-16deg]" : ""
        } transition-transform duration-[500ms]`}
      ></div>
      <div className="max-w-3xl mx-auto text-white mt-20">
        <h1 className="font-extrabold text-4xl ">About the developer</h1>
        <h2 className="font-semibold text-xl mt-10">
          Hello, my name is{" "}
          <span className="text-2xl font-bold text-cyan-500">Juan Pablo!</span>
        </h2>
        <p className="text-xl mt-2 font-thin">
          I'm the developer of this beatiful game, if you liked you can give it
          an star in GitHub or watch the entire repo by clicking the cat!
        </p>
        <div className="w-full flex justify-center">
          <a
            href={"https://github.com/Rodriguez-Jp/quiz-app-react"}
            target="_blank"
            rel="noreferrer noopener"
            className="text-8xl text-cyan-500 hover:text-white transition-colors duration-300 mt-5"
          >
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </>
  );
}
