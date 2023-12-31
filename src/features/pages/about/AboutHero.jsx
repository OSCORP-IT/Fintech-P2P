import { BiCategoryAlt } from "react-icons/bi";
import group from "../../../assets/Group.png";
function AboutHero() {
  return (
    <div className="flex flex-col items-center justify-center pt-8">
      <div className="flex w-5/6 bg-gradient-to-l from-orange-50 to-gray-200 rounded-3xl items-center justify-center pb-6 px-10">
        <div className="w-1/2">
          <div className="flex gap-1 items-center">
            <BiCategoryAlt className="text-xl text-emeraldGreen" />
            <h4 className="text-xl font-bold text-emeraldGreen">Our Company</h4>
          </div>

          <h2 className="py-4 font-bold text-black text-[25px] leading-none">
            From the smallest needs to the largest loans, we help you meet all
            your needs with 100% halal finance
          </h2>
          <p>
            We are the first ever Peer to Peer Lending platform in Bangladesh to
            bring borrowers and investors together. Our platform is completely
            shariah-based, with a vision of bringing breakthrough in the
            conventional financial system in our country. We are simplifying
            access to credit to the extent that anyone and everyone can get
            credit to meet their all sorts of needs. We are bringing investment
            opportunities to the Bangladeshis in the easiest form possible.
          </p>
        </div>
        <div className="w-1/2 py-14">
          <img src={group} alt="group image" />
        </div>
      </div>
      <div className="w-3/5 bg-emerald-900 rounded-[25px] shadow-amber-200 shadow-md -mt-[68px] flex justify-center items-center gap-8">
        <div className="text-center py-6 px-6">
          <h2 className="text-xl font-bold text-white">
            Total Amount Borrowed
          </h2>
          <h1 className="text-[38px] text-amberYellow font-bold">200000+</h1>
        </div>
        <div className="text-center py-6 px-6">
          <h2 className="text-xl font-bold text-white">
            Total Amount Invested
          </h2>
          <h1 className="text-[38px] text-amberYellow font-bold">200000+</h1>
        </div>
        <div className="text-center py-6 px-6">
          <h2 className="text-xl font-bold text-white">Our Accomplishment</h2>
          <h1 className="text-[38px] text-amberYellow font-bold">2000+</h1>
        </div>
      </div>
      <div className="w-3/6 text-center py-6 text-xl font-semibold italic">
        <h2>
          We’re establishing a platform that is completely shariah-based,
          bringing a breakthrough in the conventional finance system in our
          country.
        </h2>
      </div>
    </div>
  );
}

export default AboutHero;
