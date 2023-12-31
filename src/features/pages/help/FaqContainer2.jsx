import FaqItem from "./FaqItem";
import { afFaq, hfFaq, csFaq } from "./FAQ";
import { BiCategoryAlt } from "react-icons/bi";
function FaqContainer1({ openFaqId, handleClickFAQ }) {
  return (
    <div className="w-5/6 gap-6 flex justify-between items-start pt-6">
      <div className="w-1/3">
        <div className="flex gap-1 items-center justify-start pt-6 pb-2">
          <BiCategoryAlt className="text-xl text-emeraldGreen" />
          <h2 className="text-2xl  font-bold text-emeraldGreen">
            Patient Solutions
          </h2>
        </div>
        {csFaq.map((item) => (
          <FaqItem
            question={item.question}
            answer={item.answer}
            key={item.id}
            id={item.id}
            handleClickFAQ={handleClickFAQ}
            openFaqId={openFaqId}
          />
        ))}
      </div>

      <div className="w-1/3">
        <div className="flex gap-1 items-center justify-start pt-6 pb-2">
          <BiCategoryAlt className="text-xl text-emeraldGreen" />
          <h2 className="text-2xl  font-bold text-emeraldGreen">
            Home Financing
          </h2>
        </div>
        {hfFaq.map((item) => (
          <FaqItem
            question={item.question}
            answer={item.answer}
            key={item.id}
            id={item.id}
            handleClickFAQ={handleClickFAQ}
            openFaqId={openFaqId}
          />
        ))}
      </div>
      <div className="w-1/3">
        <div className="flex gap-1 items-center justify-start pt-6 pb-2">
          <BiCategoryAlt className="text-xl text-emeraldGreen" />
          <h2 className="text-2xl  font-bold text-emeraldGreen">How We Work</h2>
        </div>
        {afFaq.map((item) => (
          <FaqItem
            question={item.question}
            answer={item.answer}
            key={item.id}
            id={item.id}
            handleClickFAQ={handleClickFAQ}
            openFaqId={openFaqId}
          />
        ))}
      </div>
    </div>
  );
}

export default FaqContainer1;
