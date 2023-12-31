import { FaMinus, FaPlus } from "react-icons/fa";
function FaqItem({ question, answer, id, openFaqId, handleClickFAQ }) {
  return (
    <div className="py-2">
      {openFaqId !== id && (
        <div
          onClick={() => handleClickFAQ(id)}
          className="bg-gray-200/50 rounded-lg border border-stone-300 cursor-pointer p-2"
        >
          <div className="flex justify-between items-center px-2">
            <h2 className="text-lg font-bold text-stone-700">{question}</h2>
            <div className="p-2 rounded-full bg-emeraldGreen">
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
            <h2 className="text-lg font-bold text-stone-700">{question}</h2>
            <div className="p-2 rounded-full bg-amberYellow">
              <FaMinus className="text-lg text-white" />
            </div>
          </div>
          <div className="px-2 py-1 text-base font-normal text-zinc-700">
            <p>{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default FaqItem;
