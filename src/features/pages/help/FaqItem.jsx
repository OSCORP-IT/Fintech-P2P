import { FaMinus, FaPlus } from "react-icons/fa";
function FaqItem({ question, answer, id, openFaqId, handleClickFAQ }) {
  return (
    <div className="py-2">
      {openFaqId !== id && (
        <div
          onClick={() => handleClickFAQ(id)}
          className="bg-bgGradient3 bg-opacity-50 ease-out rounded-lg border border-stone-300 cursor-pointer p-2"
        >
          <div className="flex justify-between items-center px-2">
            <h2 className="text-base font-medium text-textColor3">
              {question}
            </h2>
            <div className="p-2 rounded-full bg-teal-500">
              <FaPlus className="text-lg text-white" />
            </div>
          </div>
        </div>
      )}
      {openFaqId == id && (
        <div
          onClick={() => handleClickFAQ(id)}
          className="cursor-pointer bg-white/50 rounded-lg border border-stone-300 p-2"
        >
          <div className="flex justify-between items-center px-2 border-b border-dashed border-b-stone-300 pb-2">
            <h2 className="text-base font-medium text-textColor3">
              {question}
            </h2>
            <div className="p-2 rounded-full bg-accentColor">
              <FaMinus className="text-lg text-white" />
            </div>
          </div>
          <div className="px-2 py-1 text-base font-normal text-textColor3">
            <p>{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default FaqItem;
