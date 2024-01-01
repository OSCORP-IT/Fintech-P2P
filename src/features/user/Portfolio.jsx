import { useState } from "react";
import ProfileLayout from "./ProfileLayout";
import { divisions } from "./division";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Steps from "./Steps";
import { Form } from "react-router-dom";

function Portfolio() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const handleDivisionChange = (e) => {
    const selectedDivisionName = e.target.value;
    setSelectedDivision(selectedDivisionName);
    setSelectedDistrict(""); // Reset the selected district when the division changes
  };
  const handleDistrictChange = (e) => {
    const selectedDistrictName = e.target.value;
    setSelectedDistrict(selectedDistrictName);
  };
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
                Date of Birth<span className="text-sm text-red-600">*</span>
                <span className="text-sm text-gray-600/50">
                  (According to NID)
                </span>
              </h2>
              <div className="w-full">
                <DatePicker
                  selected={selectedDate}
                  required
                  id="date"
                  onChange={(date) => setSelectedDate(date)}
                  placeholderText="DD-MM-YYYY"
                  dateFormat="dd/MM/yyyy"
                  className="py-3 px-4 rounded-md w-full border border-gray-300"
                />
              </div>
            </div>
            <div>
              <h2 className="text-base font-semibold py-2">
                Present Address<span className="text-sm text-red-600">*</span>
                <span className="text-sm text-gray-600/50">
                  (According to NID)
                </span>
              </h2>
              <input
                type="text"
                name="address"
                required
                id="address"
                placeholder="Present Address"
                className="w-full rounded-md px-4 py-3 border border-gray-300"
              />
            </div>
            <div className="flex gap-8">
              <div className="w-1/2">
                <h2 className="text-base font-semibold py-2">
                  Select Divison<span className="text-sm text-red-600">*</span>
                </h2>
                <select
                  id="division"
                  required
                  onChange={handleDivisionChange}
                  value={selectedDivision}
                  className="w-full rounded-md px-4 py-3 border border-gray-300"
                >
                  <option value="">--Select--</option>
                  {divisions.divisions.map((division) => (
                    <option key={division.id} value={division.name}>
                      {division.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-1/2">
                <h2 className="text-base font-semibold py-2">
                  Select District<span className="text-sm text-red-600">*</span>
                </h2>
                <select
                  id="district"
                  required
                  onChange={handleDistrictChange}
                  value={selectedDistrict}
                  disabled={!selectedDivision}
                  className="w-full rounded-md px-4 py-3 border border-gray-300"
                >
                  <option value="">--Select--</option>
                  {selectedDivision &&
                    divisions.divisions
                      .find((division) => division.name === selectedDivision)
                      ?.districts.map((district) => (
                        <option key={district} value={district}>
                          {district}
                        </option>
                      ))}
                </select>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="w-1/2">
                <h2 className="text-base font-semibold py-2">
                  National Identification(NID)
                  <span className="text-sm text-red-600">*</span>
                </h2>
                <input
                  type="text"
                  name="NID"
                  required
                  id="NID"
                  placeholder="National ID"
                  className="w-full rounded-md px-4 py-3 border border-gray-300"
                />
              </div>
              <div className="w-1/2">
                <h2 className="text-base font-semibold py-2">
                  Gender<span className="text-sm text-red-600">*</span>
                </h2>
                <div className="flex gap-4 text-xl justify-between items-center font-semibold">
                  <div className="flex gap-2">
                    <input type="radio" name="gender" value="male" />
                    <h5>Male</h5>
                  </div>
                  <div className="flex gap-2">
                    <input type="radio" name="gender" value="female" />
                    <h5>Female</h5>
                  </div>
                  <div className="flex gap-2">
                    <input type="radio" name="gender" value="others" />
                    <h5>Others</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="w-1/2">
                <h2 className="text-base font-semibold py-2">
                  Marital Status<span className="text-sm text-red-600">*</span>
                </h2>
                <div className="flex gap-4 text-xl justify-between items-center font-semibold">
                  <div className="flex gap-2">
                    <input type="radio" name="gender" value="male" />
                    <h5>Married</h5>
                  </div>
                  <div className="flex gap-2">
                    <input type="radio" name="gender" value="female" />
                    <h5>Unmarried</h5>
                  </div>
                </div>
              </div>

              <div className="w-1/2">
                <h2 className="text-base font-semibold py-2">
                  No of Children
                  <span className="text-sm text-red-600">*</span>
                </h2>
                <input
                  type="number"
                  name="children"
                  id="children"
                  placeholder="0"
                  className="w-full rounded-md px-4 py-3 border border-gray-300"
                />
              </div>
            </div>
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

export default Portfolio;
