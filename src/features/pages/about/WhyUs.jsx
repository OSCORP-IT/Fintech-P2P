import { BiCategoryAlt } from "react-icons/bi";

function WhyUs() {
  return (
    <div>
      <div className="flex gap-1 items-center justify-center">
        <BiCategoryAlt className="text-xl text-emeraldGreen" />
        <h2 className="text-xl  font-bold text-emeraldGreen">Our Commitment</h2>
      </div>
      <div className="flex justify-center items-center my-6">
        <div className="flex w-3/5 justify-center items-center gap-4">
          <div className="pl-1.5 shadow-lg shadow-gray-200 w-1/2 h-[180px] bg-gradient-to-b from-emeraldGreen to-amberYellow rounded-xl">
            <div className="w-full h-full bg-white rounded-xl px-10 py-4">
              <h1 className="text-xl font-bold text-black ">
                Establishing Islamic Finance
              </h1>
              <p className="py-4 ">
                The customers in Bangladesh deserve better opportunities. For
                that, we are developing the most efficient platform, leading the
                governance of a new industry in this country.
              </p>
            </div>
          </div>
          <div className="shadow-lg pr-1.5 shadow-gray-200 w-1/2 h-[180px] bg-gradient-to-b from-emeraldGreen to-amberYellow rounded-xl">
            <div className="w-full h-full bg-white rounded-xl px-10 py-4">
              <h1 className="text-xl font-bold text-black ">
                Meeting the need
              </h1>
              <p className="py-4 ">
                The customers in Bangladesh deserve better opportunities. For
                that, we are developing the most efficient platform, leading the
                governance of a new industry in this country.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-6">
        <div className="flex w-3/5 justify-center items-center gap-4">
          <div className="pl-1.5 shadow-lg shadow-gray-200 w-1/2 h-[180px] bg-gradient-to-b from-amberYellow to-emeraldGreen rounded-xl">
            <div className="w-full h-full bg-white rounded-xl px-10 py-4">
              <h1 className="text-xl font-bold text-black ">
                Reinventing the system
              </h1>
              <p className="py-4 ">
                Conventional credit and investing can be hectic, covered with
                layers of bureaucracy. We’re a working on creative solutions for
                delivering more values with a way better experience.
              </p>
            </div>
          </div>
          <div className="shadow-lg pr-1.5 shadow-gray-200 w-1/2 h-[180px] bg-gradient-to-b from-amberYellow to-emeraldGreen rounded-xl">
            <div className="w-full h-full bg-white rounded-xl px-10 py-4">
              <h1 className="text-xl font-bold text-black ">
                Providing the values you deserve
              </h1>
              <p className="py-4 ">
                We’re simplifying access to credit to the greatest extent so
                far, developing shariah compliant ways for bringing greater
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
