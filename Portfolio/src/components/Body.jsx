import Project from "./Project";
const Body = () => {
  return (
    <>
      <div
        className="mt-36 h-[600px] flex flex-col  justify-center text-center items-center"
        id="experience"
      >
        <div className="mt-1 md:h-40 border w-1/2 md:w-1/3 border-white">
          <div className="font-bold text-2xl">IT Industry</div>
          <div className="h-[1px] w-full bg-white rounded-full"></div>
          <div className="flex justify-around mt-2 items-center">
            <img
              src="https://media.licdn.com/dms/image/C560BAQGkaMZIPn1SOQ/company-logo_200_200/0/1677275651352?e=1697673600&v=beta&t=MOBih3uIbpHECj2lnlsDSKQ_wgvDdOWWit0I60etjDY"
              alt="collage image"
              className="w-1/6 md:h-28 rounded-full h-10 mr-10"
            />
            <div className=" flex flex-col">
              <p className="text-sm">Software Engineer 2023-present</p>
              <p className="text-sm">Junior Software Engineer 2022</p>
              <p className="text-sm">Trainee 2022</p>
            </div>
          </div>
        </div>
        <div className="bg-white h-10 w-1"></div>
        <div className="mt-1 md:h-40 border w-1/2 md:w-1/3 border-white">
          <div className="font-bold text-2xl">Collage</div>
          <div className="h-[1px] w-full bg-white rounded-full"></div>
          <div className="flex justify-around mt-2 items-center">
            <img
              src="https://simg.nicepng.com/png/small/242-2424515_by-rakesh-basnet-colleges-and-universities-icon.png"
              alt="collage image"
              className="w-1/6 md:h-28 rounded-full h-10"
            />
            <p className="text-sm">
              Poornima Collage Of Engineering - CSE 2018-2022
            </p>
          </div>
        </div>
        <div className="bg-white h-10 w-1"></div>
        <div className="mt-1 md:h-40 border w-1/2 border-white md:w-1/3">
          <div className="font-bold text-2xl">School</div>
          <div className="h-[1px] w-full bg-white rounded-full"></div>
          <div className="flex justify-around mt-2 items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE80RpdLxpTSicgrK0tNYUoJMl-QSYdWADfw&usqp=CAU"
              alt="school image"
              className="w-1/6 md:h-28 rounded-full h-10"
            />
            <p className="text-sm">Vidyasthali Public School - xii 2016-2018</p>
          </div>
        </div>
      </div>
      <Project />
    </>
  );
};

export default Body;
