import { Form } from "react-router-dom";
import ProfileLayout from "./ProfileLayout";
import Steps from "./Steps";

function ProfessionalInfo() {
  return (
    <ProfileLayout>
      <div className="my-4 w-full">
        <Steps />
        <Form method="POST">
          <div className="w-3/4 px-4">
            <div className="w-full">
              <h2 className="text-base font-semibold py-2">
                Employment Name<span className="text-sm text-red-600">*</span>
              </h2>
              <div className="flex gap-4 text-xl justify-between items-center font-semibold">
                <div className="flex gap-2">
                  <input type="radio" name="employment" value="self" />
                  <h5>Self-employed</h5>
                </div>
                <div className="flex gap-2">
                  <input type="radio" name="employment" value="salaried" />
                  <h5>Salaried</h5>
                </div>
                <div className="flex gap-2">
                  <input type="radio" name="employment" value="retired" />
                  <h5>Retired</h5>
                </div>
                <div className="flex gap-2">
                  <input type="radio" name="employment" value="others" />
                  <h5>Others</h5>
                </div>
              </div>
            </div>

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
                  <option value="2">10000-20000</option>
                  <option value="3">20000-40000</option>
                  <option value="4">40000-60000</option>
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
            <div className="flex gap-8">
              <div className="w-1/2">
                <h2 className="text-base font-semibold py-2">
                  Company Address
                </h2>
                <input
                  type="text"
                  name="company_address"
                  id="company_address"
                  placeholder="Company Address"
                  className="py-2.5 px-4  text-xl font-normal rounded-lg w-full border border-gray-300"
                />
              </div>
              <div className="w-1/2">
                <h2 className="text-base font-semibold py-2">Company Phone</h2>
                <input
                  type="text"
                  name="company_phone"
                  id="company_phone"
                  placeholder="Company Phone"
                  className="py-2.5 px-4  text-xl font-normal rounded-lg w-full border border-gray-300"
                />
              </div>
            </div>
            <div className="flex gap-8">
              <div className="w-1/2">
                <h2 className="text-base font-semibold py-2">
                  Company Website
                </h2>
                <input
                  type="text"
                  name="company_website"
                  id="company_website"
                  placeholder="Company Website"
                  className="py-2.5 px-4  text-xl font-normal rounded-lg w-full border border-gray-300"
                />
              </div>
              <div className="w-1/2">
                <h2 className="text-base font-semibold py-2">Company Email</h2>
                <input
                  type="text"
                  name="company_email"
                  id="company_email"
                  placeholder="Company Email"
                  className="py-2.5 px-4  text-xl font-normal rounded-lg w-full border border-gray-300"
                />
              </div>
            </div>
            <div className="flex gap-8">
              <div className="w-1/2">
                <h2 className="text-base font-semibold py-2">Taxpayer ID No</h2>
                <input
                  type="text"
                  name="taxpayer_id"
                  id="taxpayer_id"
                  placeholder="Taxpayer ID"
                  className="py-2.5 px-4  text-xl font-normal rounded-lg w-full border border-gray-300"
                />
              </div>
              <div className="w-1/2">
                <h2 className="text-base font-semibold py-2">Rental Income</h2>
                <input
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
                <h2 className="text-base font-semibold py-2">
                  Supervisor Name
                </h2>
                <input
                  type="text"
                  name="supervisor_name"
                  id="supervisor_name"
                  placeholder="Supervisor Name"
                  className="py-2.5 px-4  text-xl font-normal rounded-lg w-full border border-gray-300"
                />
              </div>
              <div className="w-1/2">
                <h2 className="text-base font-semibold py-2">
                  Supervisor Phone
                </h2>
                <input
                  type="text"
                  name="supervisor_phone"
                  id="supervisor_phone"
                  placeholder="Supervisor Phone"
                  className="py-2.5 px-4  text-xl font-normal rounded-lg w-full border border-gray-300"
                />
              </div>
            </div>
            <div>
              <h2 className="text-base font-semibold py-2">
                Educational Qualification
                <span className="text-sm text-red-600">*</span>
              </h2>
              <div className="border border-gray-300">
                <div className="flex gap-2">
                  <div>Exam Name</div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </ProfileLayout>
  );
}

export default ProfessionalInfo;
