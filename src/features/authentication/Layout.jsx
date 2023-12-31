import signup from "../../assets/signup.png";

function Layout({ children }) {
  return (
    <div className="relative w-full bg-gradient-to-l from-gray-200 to-orange-50 ">
      <div className="flex gap-4 px-[120px] py-[60px] justify-end items-center">
        <div className="bg-white shadow-md rounded-xl w-3/5 py-8 px-12 relative overflow-hidden ">
          <div className="absolute h-[150px] w-[150px] rounded-full bg-amberYellow top-0 left-0 -ml-8 -mt-14 overflow-hidden z-auto"></div>
          <div className="absolute w-full h-full backdrop-blur-sm rounded-xl top-0 left-0"></div>
          <h1 className="py-3 text-3xl font-bold text-emeraldGreen relative">
            Lets Get Started!
          </h1>
          <div className="relative">{children}</div>
        </div>
        <div className="w-2/5 flex justify-end">
          <img src={signup} alt="image-signup" />
        </div>
      </div>
    </div>
  );
}

export default Layout;
