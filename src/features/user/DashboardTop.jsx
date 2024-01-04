import { FiFilter } from "react-icons/fi";
function DashboardTop() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-neutral-700 text-base font-medium">
          Welcome Back, Abidur
        </h2>
        <p className="text-neutral-300 text-sm font-medium">
          Here are your current loans
        </p>
      </div>
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
        <div className="cursor-pointer p-2 bg-amberYellow rounded-md text-xl font-bold">
          <FiFilter />
        </div>
      </div>
    </div>
  );
}

export default DashboardTop;
