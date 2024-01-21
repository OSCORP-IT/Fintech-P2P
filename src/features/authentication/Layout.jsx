import logo from "../../assets/image 2.png";
import form from "../../assets/form.png";

function Layout({ children }) {
  return (
    <div className="relative w-full bg-backgroundMain flex justify-center ">
      <div className="flex gap-4 w-[55%] py-[30px] justify-center items-center">
        <div className="bg-white cards rounded-2xl w-full relative overflow-hidden backdrop:blur-sm">
          <div className="absolute h-[150px] w-[150px] rounded-full bg-gradient-to-r from-teal-500 from-5% via-teal-300  to-teal-100 top-0 left-0 -ml-12 -mt-6 overflow-hidden z-auto"></div>
          <div className="absolute w-full h-full backdrop-blur-md rounded-xl top-0 left-0"></div>
          <div className="relative flex items-start justify-center gap-4">
            <div className="w-1/2 flex justify-center">
              <div className="w-4/5 flex flex-col items-center py-10">
                <img
                  src={logo}
                  alt="logo
                "
                />
                <h2 className="py-6 text-center text-textColor1 text-[30px] font-bold">
                  Lets Get Started!
                </h2>
                <div className="pt-6 w-full">{children}</div>
              </div>
            </div>
            <div className="w-1/2 rounded-2xl">
              <img
                src={form}
                alt="formside"
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
