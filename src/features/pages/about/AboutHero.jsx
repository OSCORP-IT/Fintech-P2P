import group from "../../../assets/Group.png";
function AboutHero() {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-8 bg-backgroundMain">
        <div className="text-center">
          <h4 className="text-3xl font-semibold text-textColor1">
            Our Company
          </h4>
        </div>
        <div className="flex w-5/6 rounded-3xl items-center justify-center pb-[60px] px-10">
          <div className="w-1/2">
            <h2 className="py-4 font-bold text-textColor1 text-[48px] leading-none">
              From the smallest needs to the largest loans, we help you meet all
              your needs with 100% halal finance
            </h2>
            <p className="text-base font-normal text-textColor3">
              We are the first ever{" "}
              <strong>Peer to Peer Lending platform</strong> in Bangladesh to
              bring borrowers and investors together. Our platform is completely
              shariah-based, with a vision of bringing breakthrough in the
              conventional financial system in our country. We are simplifying
              access to credit to the extent that anyone and everyone can get
              credit to meet their all sorts of needs. We are bringing
              investment opportunities to the Bangladeshis in the easiest form
              possible.
            </p>
          </div>
          <div className="w-1/2 py-14 flex justify-center">
            <img src={group} alt="group image" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pb-6">
        <div className="w-3/5 bg-white rounded-[25px] shadow-amber-200 shadow-md -mt-[55px] flex justify-center items-center gap-8 cards">
          <div className="text-center py-6 px-6 border-r border-r-gray-300">
            <h2 className="text-xl font-semibold text-textColor3">
              Total Amount Borrowed
            </h2>
            <h1 className="text-[38px] text-textColor1 font-bold">200000+</h1>
          </div>
          <div className="text-center py-6 px-6 border-r border-r-gray-300">
            <h2 className="text-xl font-semibold text-textColor3">
              Total Amount Invested
            </h2>
            <h1 className="text-[38px] text-textColor1 font-bold">200000+</h1>
          </div>
          <div className="text-center py-6 px-6">
            <h2 className="text-xl font-semibold text-textColor3">
              Our Accomplishment
            </h2>
            <h1 className="text-[38px] text-textColor1 font-bold">2000+</h1>
          </div>
        </div>
        <div className="w-3/6 text-center text-textColor2 py-6 text-xl font-semibold italic">
          <h2>
            We’re establishing a platform that is completely shariah-based,
            bringing a breakthrough in the conventional finance system in our
            country.
          </h2>
        </div>
      </div>
    </>
  );
}

export default AboutHero;
