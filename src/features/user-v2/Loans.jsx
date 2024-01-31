import { FiFilter } from "react-icons/fi";
import ProfileLayout from "./ProfileLayout";
import WelcomeNote from "./WelcomeNote";
import LoanListItem from "./LoanListItem";
import { useState } from "react";
import ModalLoan from "./ModalLoan";

function Loans() {
  const [modalOpen, setModalOpen] = useState(false);
  function handleModal() {
    setModalOpen((s) => !s);
  }
  return (
    <ProfileLayout>
      <div className="flex justify-between items-center pt-4 pb-2">
        <WelcomeNote />
        <div className="flex gap-4 items-center">
          <select
            name="loans"
            id="loan"
            className="cursor-pointer border border-neutral-400 rounded-md text-base font-medium px-4 py-2 text-neutral-700"
          >
            <option value="all">All Loans</option>
            <option value="personal">Personal Loans</option>
            <option value="business">Business Loans</option>
            <option value="invest">Investment</option>
          </select>
          <div className="cursor-pointer p-2 bg-accentColor rounded-md text-xl font-bold">
            <FiFilter />
          </div>
        </div>
      </div>
      <div className="rounded-md cards h-[85%] p-4 bg-white relative">
        <div className="flex justify-between items-center text-start text-sm text-textColor3 uppercase border-b border-gray-300 pb-2">
          <div className="w-2/12">loan type</div>
          <div className="w-2/12">Loan Purpose</div>
          <div className="w-2/12">Loan amount</div>
          <div className="w-2/12">Loan closing</div>
          <div className="w-1/12">loan term</div>
          <div className="w-1/12">Portfolio</div>
          <div className="w-2/12">loan status</div>
        </div>
        <div className="pt-2">
          <LoanListItem onOpenModal={handleModal} />
          <LoanListItem onOpenModal={handleModal} />
          <LoanListItem onOpenModal={handleModal} />
          <LoanListItem onOpenModal={handleModal} />
        </div>
        <div className="absolute bottom-4 left-[45%]">
          <h2>{"< 1 2 3 4 ... >"}</h2>
        </div>
        {modalOpen && <ModalLoan onModalOpen={handleModal} />}
      </div>
    </ProfileLayout>
  );
}

export default Loans;
