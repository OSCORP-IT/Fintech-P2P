import LoanHeader from "./LoanHeader";
import LoanTitle from "./LoanTitle";

function TopLayout({ question, children }) {
  return (
    <div>
      <LoanHeader />
      <div className="bg-gradient-to-l from-orange-50 to-gray-200 h-screen">
        <LoanTitle />
        <div className="text-center text-emeraldGreen text-[42px] font-bold font-frank">
          <h2>{question}</h2>
        </div>
        {children}
      </div>
    </div>
  );
}

export default TopLayout;
