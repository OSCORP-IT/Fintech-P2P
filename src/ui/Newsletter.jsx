import wellbeing from "../assets/wellbeing.png";
import H2 from "./H2";
import P from "./P";
function Newsletter() {
  return (
    <div className="w-full bg-white pt-10">
      <div className="px-[120px] flex items-center justify-center py-6">
        <div className="w-2/3 px-8">
          <H2>Financial well-being for everyone.</H2>
          <P addedClass={"py-6"}>
            Everything we do is centered around empowering you to meet your
            personal financial goals by enabling access to a broad range of
            financial products, services, and educational resources, all
            designed to help you pay less when borrowing and earn more when
            saving.
          </P>
          <div className="border border-accentColor text-accentColor font-bold px-6 cursor-pointer text-xl py-1 w-max hover:bg-accentColor hover:text-white">
            <p>Contact Us</p>
          </div>
        </div>
        <div className="w-1/ flex justify-end items-center py-6 pl-4 ">
          <img src={wellbeing} alt="welbeing" />
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
