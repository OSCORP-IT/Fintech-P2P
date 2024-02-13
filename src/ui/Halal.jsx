import CarouselComponent from "./CarouselComponent";
import GradientHeader from "./GradientHeader";

function Halal() {
  return (
    <>
      <div className="w-full bg-backgroundMain flex justify-center py-6">
        <div className="w-4/6 pt-10 pb-4 text-center">
          <div className="flex gap-1 items-center justify-center">
            <h2 className="text-2xl font-bold text-textColor1">
              How We Are 100% Halal
            </h2>
          </div>
          <div>
            <GradientHeader
              to="l"
              addedClass="text-[54px] font-extrabold py-6 font-poppins"
            >
              Committed to Pure Halal Standards: Our Assurance of
              <span className="text-amberYellow"> 100% Halal </span>
              Products
            </GradientHeader>
          </div>
        </div>
      </div>
      <CarouselComponent />
    </>
  );
}

export default Halal;
