import PortfolioInput from "./PortfolioInput";

function CompanyInfo() {
  return (
    <>
      <div className="flex gap-8">
        <div className="w-1/2">
          <PortfolioInput
            label={"company address"}
            type="text"
            id="company_address"
            placeholder="Company Address"
          />
        </div>
        <div className="w-1/2">
          <PortfolioInput
            label={"company phone"}
            type="text"
            id="company_phone"
            placeholder="Company Phone"
          />
        </div>
      </div>
      <div className="flex gap-8">
        <div className="w-1/2">
          <PortfolioInput
            label={"company website"}
            type="text"
            id="company_website"
            placeholder="Company Website"
          />
        </div>
        <div className="w-1/2">
          <PortfolioInput
            label={"company email"}
            type="email"
            id="company_email"
            placeholder="Company Email"
          />
        </div>
      </div>
      <div className="flex gap-8">
        <div className="w-1/2">
          <PortfolioInput
            label={"taxpayer identification no"}
            type="text"
            name="taxpayer_id"
            id="taxpayer_id"
            placeholder="Taxpayer ID"
            className="py-2.5 px-4  text-xl font-normal rounded-lg w-full border border-gray-300"
          />
        </div>
        <div className="w-1/2">
          <PortfolioInput
            label={"rental income"}
            type="text"
            name="reantal_income"
            id="reantal_income"
            placeholder="Rental Income"
            className="py-2.5 px-4  text-xl font-normal rounded-lg w-full border border-gray-300"
          />
        </div>
      </div>
      <div className="flex gap-8">
        <div className="w-1/2">
          <PortfolioInput
            label={"supervisor name"}
            type="text"
            name="supervisor_name"
            id="supervisor_name"
            placeholder="Supervisor Name"
          />
        </div>
        <div className="w-1/2">
          <PortfolioInput
            label={"supervisor phone"}
            type="text"
            name="supervisor_phone"
            id="supervisor_phone"
            placeholder="Supervisor Phone"
          />
        </div>
      </div>
    </>
  );
}

export default CompanyInfo;
