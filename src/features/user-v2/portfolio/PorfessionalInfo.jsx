import CompanyInfo from "./CompanyInfo";
import Education from "./Education";
import OutstandingLoan from "./OutstandingLoan";
import ProfessionalStatus from "./ProfessionalStatus";
import PortfolioInput from "./PortfolioInput";
import Button from "../../../ui/Button";
import { useState } from "react";

function PorfessionalInfo() {
  const [status, setStatus] = useState("salaried");
  function handleStatus(e) {
    setStatus(e.target.value);
  }
  return (
    <div className="w-3/4 px-4 overflow-y-scroll">
      <ProfessionalStatus handleStatus={handleStatus} status={status} />
      {/* MonthlySalary & Company name */}
      <div className="flex gap-8">
        <div
          className={`${
            status === "salaried" || status === "others" ? "w-1/2" : "w-full"
          }`}
        >
          <h2 className="text-sm font-medium py-2">
            Monthly Income<span className="text-xs text-red-600">*</span>
          </h2>
          <select
            id="salaryRange"
            required
            className="w-full rounded-md px-4 py-2 border border-gray-300"
          >
            <option value="">--Select--</option>
            <option value="1">0-10000</option>
            <option value="2">10000-25000</option>
            <option value="3">25000-50000</option>
            <option value="4">50000-75000</option>
          </select>
        </div>
        {status === "salaried" && (
          <div className="w-1/2">
            <PortfolioInput
              label={"company name"}
              required={true}
              type="text"
              id="company_name"
              placeholder="Company Name"
            />
          </div>
        )}
        {status === "others" && (
          <div className="w-1/2">
            <PortfolioInput
              required={true}
              label={"profession type"}
              type="text"
              id="profession_type"
              placeholder="Profession Type"
            />
          </div>
        )}
      </div>
      {status === "salaried" && <CompanyInfo />}
      {/* Education Qualification */}
      <Education />
      {/* OutStanding Loan */}
      <OutstandingLoan />
      <div className="flex justify-center items-center mt-8 mb-4">
        <Button addedClass={"bg-accentColor py-2 px-6 text-white capitalize"}>
          save & next
        </Button>
      </div>
    </div>
  );
}

export default PorfessionalInfo;
