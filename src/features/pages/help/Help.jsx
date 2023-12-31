import FAQTop from "./FAQTop";
import FaqContainer1 from "./FaqContainer1";
import FaqContainer2 from "./FaqContainer2";
import HelpBottom from "./HelpBottom";
import HelpTop from "./HelpTop";
import { useState } from "react";

function Help() {
  const [openFaqId, setOpenFaqId] = useState("");
  function handleClickFAQ(id) {
    if (openFaqId) {
      if (openFaqId === id) setOpenFaqId("");
      else setOpenFaqId(id);
    } else setOpenFaqId(id);
  }
  return (
    <div className="w-full flex flex-col items-center ">
      <HelpTop />
      <FAQTop />
      <FaqContainer1 handleClickFAQ={handleClickFAQ} openFaqId={openFaqId} />
      <FaqContainer2 handleClickFAQ={handleClickFAQ} openFaqId={openFaqId} />
      <HelpBottom />
    </div>
  );
}

export default Help;
