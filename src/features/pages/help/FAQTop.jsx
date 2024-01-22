import GradientHeader from "../../../ui/GradientHeader";
function FAQTop() {
  return (
    <div className="w-1/2">
      <div className="flex gap-1 items-center justify-center pt-6">
        <h2 className="text-2xl  font-bold text-textColor1">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="text-center text-[36px] font-bold pb-3">
        <GradientHeader to={"l"}>
          Find Answerd to Common Questions
        </GradientHeader>
      </div>
      <div className="text-center text-lg font-thin pb-4 text-textColor3">
        <p>
          We&apos;ve compiled a list of frequently asked questions to provide
          you with quick and helpful answers. If you have a question that is not
          addressed below
        </p>
      </div>
    </div>
  );
}

export default FAQTop;
