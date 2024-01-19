import wellbeing from "../assets/wellbeing.png";
function Newsletter() {
  return (
    <div className="w-full bg-white pt-10">
      <div className="px-[120px] flex items-center justify-center py-6">
        <div className="w-2/3 px-8">
          <h2 className="text-3xl font-bold text-textColor1 font-poppins">
            Financial well-being for everyone.
          </h2>
          <p className="py-6 text-textColor3 font-poppins text-base">
            Everything we do is centered around empowering you to meet your
            personal financial goals by enabling access to a broad range of
            financial products, services, and educational resources, all
            designed to help you pay less when borrowing and earn more when
            saving.
          </p>
          <div className="border border-accentColor text-accentColor font-bold px-6 cursor-pointer text-xl py-1 w-max hover:bg-accentColor hover:text-white">
            <p>Contact Us</p>
          </div>
        </div>
        <div className="w-1/3 text-start py-6 pl-4 ">
          <img src={wellbeing} alt="welbeing" />
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
