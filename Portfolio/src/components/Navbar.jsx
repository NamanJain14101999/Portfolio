// import { useState } from "react";

const Navbar = () => {
  // const [clicked, setClicked] = useState(false);
  return (
    <>
      <div className="flex justify-between p-5" id="home">
        <span className=" font-bold text-xl  md:text-4xl md:font-extrabold">
          Portfolio.
        </span>
        <ul className="md:flex md:justify-around md:text-2xl min-w-[60%] md:min-w[50%] items-center text-xs flex justify-around">
          <li className="">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
        </ul>
        {/* <div className="md:hidden lg:hidden text-2xl">
          <button onClick={() => setClicked(!clicked)}>
            {clicked ? "\u2261" : "\u274C"}
            {!clicked && (
              <>
                <div className="absolute bg-red-700 w-full top-0 left-0 h-96">
                  naman jain
                </div>
              </>
            )}
          </button>
        </div> */}
      </div>
      <div className=" w-full h-1 bg-white rounded-full"></div>
    </>
  );
};

export default Navbar;
