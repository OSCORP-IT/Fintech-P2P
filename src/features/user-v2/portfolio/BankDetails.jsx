import Button from "../../../ui/Button";
import { bangladeshBanks } from "../../user/division";
import PortfolioInput from "./PortfolioInput";
function BankDetails() {
  return (
    <div className="w-3/4 px-4">
      <div>
        <PortfolioInput
          label={"your name"}
          bg={"bg-gray-200/50"}
          required={true}
          nid={true}
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          defaultValue="Abidur Rahman"
        />
      </div>
      <div className="w-full pb-2">
        <h2 className="text-sm font-semibold py-2">
          Bank Name<span className="text-xs text-red-600">*</span>
        </h2>
        <select
          id="bank"
          required
          className="w-full text-base rounded-md px-4 py-2 border border-gray-300"
        >
          <option value="">--Select--</option>
          {bangladeshBanks.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
          <option value="others">Others</option>
        </select>
      </div>
      <div className="flex items-center gap-8">
        <div className="w-1/2">
          <PortfolioInput
            label={"account number"}
            required={true}
            type="text"
            name="account_no"
            id="account_no"
            placeholder="Account Number"
          />
        </div>
        <div className="w-1/2">
          <PortfolioInput
            label={"confirm account number"}
            required={true}
            type="text"
            name="confirm_account_no"
            id="confirm_account_no"
            placeholder="Confirm Account Number"
          />
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="w-1/2">
          <PortfolioInput
            label={"rounting number"}
            type="text"
            name="routing_no"
            id="routing_no"
            placeholder="Routing Number"
            required={true}
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-sm font-semibold py-2">
            Account Type
            <span className="text-xs text-red-600">*</span>
          </h2>
          <select
            id="account_type"
            required
            className="w-full text-base rounded-md px-4 py-2 border border-gray-300"
          >
            <option value="">--Select--</option>
            <option value="">Savings</option>
            <option value="">Current</option>
            <option value="">Salary</option>
            <option value="">Fixed</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center items-center mt-14 mb-4">
        <Button addedClass="py-2 px-4 bg-accentColor text-white font-semibold">
          {" "}
          Save & Next
        </Button>
      </div>
    </div>
  );
}

export default BankDetails;
