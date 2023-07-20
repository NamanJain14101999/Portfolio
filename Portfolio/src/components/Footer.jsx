const Footer = () => {
  return (
    <>
      <div className="h-1 border border-white w-full"></div>
      <div className=" flex justify-center items-center my-5">
        <span>Made With ❤ by Naman Jain</span>
        <ul className="flex justify-around w-48 bg-black">
          <li>
            <a href="https://www.linkedin.com/in/naman-jain-0980b216a/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYkQ84aYDqpNA-fIv74FP3Nb7d0tGDQxC9Q&usqp=CAU"
                alt=""
                className="h-10 w-10 rounded-full cursor-pointer"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/NamanJain14101999">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDBksJlWxjT7yqUyCN4fk5bU07TJkssSU9WQ&usqp=CAU"
                alt=""
                className="h-10 w-10 rounded-full cursor-pointer"
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
