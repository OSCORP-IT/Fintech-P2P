import AboutHero from "./AboutHero";
import TrustyBoard from "./TrustyBoard";
import NewsLetter from "../../../ui/Newsletter";
import WhyUs from "./WhyUs";
function AboutUs() {
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <AboutHero />
      <WhyUs />
      <TrustyBoard />
      <NewsLetter />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handlePrint}
      >
        Print
      </button>
    </>
  );
}

export default AboutUs;
