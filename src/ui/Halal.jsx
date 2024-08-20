import CarouselComponent from "./CarouselComponent";
import GradientHeader from "./GradientHeader";
import H4 from "./H4";

function Halal() {
  return (
    <>
      <div className="w-full bg-backgroundMain flex justify-center py-6">
        <div className="w-4/6 pt-10 pb-4 text-center">
          <div className="flex gap-1 items-center justify-center">
            <H4>How We Are 100% Halal</H4>
          </div>
          <div className="pb-4">
            <GradientHeader
              to="l"
              addedClass="text-5xl laptop:text-[54px]  font-extrabold py-6 font-poppins"
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
