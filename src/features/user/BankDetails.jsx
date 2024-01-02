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
                id="exam"
                required
                className="w-full rounded-md px-4 py-3 border border-gray-300"
              >
                <option value="">--Select--</option>
                {bangladeshBanks.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Form>
      </div>
    </ProfileLayout>
  );
}

export default BankDetails;
