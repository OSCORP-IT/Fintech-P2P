import { Form } from "react-router-dom";
import ProfileLayout from "./ProfileLayout";
import Steps from "./Steps";
import OutstandingLoan from "./OutstandingLoan";
import Education from "./Education";
import ProfessionalStatus from "./ProfessionalStatus";
import CompanyInfo from "./CompanyInfo";

function ProfessionalInfo() {
  return (
    <ProfileLayout>
      <div className="my-4 w-full">
        <Steps />
        <Form method="POST">
          <div className="w-3/4 px-4">
            <ProfessionalStatus />
            {/* MonthlySalary & Company name */}
            <div className="flex gap-8">
              <div className="w-1/2">
                <h2 className="text-base font-semibold py-2">
                  Monthly Income<span className="text-sm text-red-600">*</span>
                </h2>
                <select
                  id="salaryRange"
                  required
                  className="w-full rounded-md px-4 py-3 border border-gray-300"
                >
                  <option value="">--Select--</option>
                  <option value="1">0-10000</option>
                  <option value="2">10000-25000</option>
                  <option value="3">25000-50000</option>
                  <option value="4">50000-75000</option>
                </select>
              </div>
              <div className="w-1/2">
                <h2 className="text-base font-semibold py-2">Company Name</h2>
                <input
                  type="text"
                  name="company_name"
                  id="company_name"
                  placeholder="Company Name"
                  className="py-2.5 px-4  text-xl font-normal rounded-lg w-full border border-gray-300"
                />
              </div>
            </div>
            {/* Company Info */}
            <CompanyInfo />
            {/* Education Qualification */}
            <Education />
            {/* OutStanding Loan */}
            <OutstandingLoan />
            <div className="flex justify-center items-center mt-8 mb-4">
              <h1 className="px-4 py-3 bg-amberYellow rounded-lg cursor-pointer font-semibold text-lg">
                Save & Continue
              </h1>
            </div>
          </div>
        </Form>
      </div>
    </ProfileLayout>
  );
}

export default ProfessionalInfo;
