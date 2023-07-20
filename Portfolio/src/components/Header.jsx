const Header = () => {
  return (
    <div className=" m-2 p-2 h-90 flex justify-around flex-wrap" id="about">
      <div className=" flex flex-col justify-center">
        <div className="text-xl">Hello👋 I'm</div>
        <div className="text-6xl">Naman Jain</div>
        <div className="text-xl">And I'm a</div>
        <div className="text-4xl">Front End Developer/React.js Developer</div>
      </div>
      <div className="bg-white w-96 h-96 rounded-full shadow-2xl shadow-white">
        <img
          src="https://avatars.githubusercontent.com/u/76099869?v=4"
          className="h-full w-full rounded-full"
          alt="naman jain image"
        />
      </div>
    </div>
  );
};

export default Header;
