import { Form } from "react-router-dom";
import ProfileLayout from "./ProfileLayout";
import Steps from "./Steps";
import { bangladeshBanks } from "./division";

function BankDetails() {
  return (
    <ProfileLayout>
      <div className="my-4 w-full">
        <Steps />
        <Form method="POST">
          <div className="w-3/4 px-4">
            <div>
              <h2 className="text-base font-semibold py-2">
                Your Name<span className="text-sm text-red-600">*</span>
                <span className="text-sm text-gray-600/50">
                  (According to NID)
                </span>
              </h2>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="py-3 px-4 text-gray-400 text-xl font-medium rounded-lg w-full bg-gray-200/50"
                defaultValue="Abidur Rahman"
              />
            </div>
            <div className="w-full">
              <h2 className="text-base font-semibold py-2">
                Bank Name<span className="text-sm text-red-600">*</span>
              </h2>
              <select
                id="bank"
                required
                className="w-full text-lg rounded-md px-4 py-3 border border-gray-300"
              >
                <option value="">--Select--</option>
                {bangladeshBanks.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-1/2">
                <h2 className="text-base font-semibold py-2">
                  Account Number<span className="text-sm text-red-600">*</span>
                </h2>
                <input
                  type="text"
                  name="account_no"
                  id="account_no"
                  placeholder="Account Number"
                  className="py-3 px-4  text-xl  rounded-lg w-full border border-gray-300"
                />
              </div>
              <div className="w-1/2">
                <h2 className="text-base font-semibold py-2">
                  Confirm Account Number
                  <span className="text-sm text-red-600">*</span>
                </h2>
                <input
                  type="text"
                  name="confirm_account_no"
                  id="confirm_account_no"
                  placeholder="Confirm Account Number"
                  className="py-3 px-4  text-xl rounded-lg w-full border border-gray-300"
                />
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-1/2">
                <h2 className="text-base font-semibold py-2">
                  Rounting Number<span className="text-sm text-red-600">*</span>
                </h2>
                <input
                  type="text"
                  name="routing_no"
                  id="routing_no"
                  placeholder="Routing Number"
                  className="py-3 px-4  text-xl  rounded-lg w-full border border-gray-300"
                />
              </div>
              <div className="w-1/2">
                <h2 className="text-base font-semibold py-2">
                  Account Type
                  <span className="text-sm text-red-600">*</span>
                </h2>
                <select
                  id="account_type"
                  required
                  className="w-full text-lg rounded-md px-4 py-3 border border-gray-300"
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

export default BankDetails;
