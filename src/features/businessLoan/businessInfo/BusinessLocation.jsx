import { useState } from "react";
import { divisions } from "../../user/division";
import TopLayout from "../TopLayout";

function BusinessLocation() {
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
    <div>
      <TopLayout question={"What’s your business location?"}>
        <div className="flex justify-center py-4">
          <div className="flex flex-col justify-center text-center">
            <div className="flex-none flex justify-between gap-3 items-center">
              <div className="text-center text-xl font-bold border bg-gray-200 border-neutral-400 flex-grow rounded-md">
                <select
                  name="businessDivision"
                  id="businessDivision"
                  required
                  onChange={handleDivisionChange}
                  value={selectedDivision}
                  className="w-full bg-gray-200 p-2 text-xl text-neutral-700 font-medium rounded-md "
                >
                  <option value="">Division</option>
                  {divisions.divisions.map((division) => (
                    <option key={division.id} value={division.name}>
                      {division.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="text-center text-xl font-bold flex-grow">
                <select
                  name="businessDistrict"
                  id="businessDistrict"
                  onChange={handleDistrictChange}
                  disabled={selectedDivision === ""}
                  value={selectedDistrict}
                  className="bg-gray-200 w-full p-2 text-xl text-neutral-700 font-medium rounded-md border border-neutral-400"
                >
                  <option value="">District</option>
                  {selectedDivision &&
                    divisions.divisions
                      .find((division) => division.name === selectedDivision)
                      ?.districts.map((district, index) => (
                        <option key={index} value={district}>
                          {district}
                        </option>
                      ))}
                </select>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center gap-3 py-4">
              <div>
                <input
                  type="text"
                  placeholder="Thana"
                  className="p-2 text-xl font-medium bg-gray-200 rounded-md border border-neutral-400"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="ZIP Code"
                  className="p-2 text-xl font-medium bg-gray-200 rounded-md border border-neutral-400"
                />
              </div>
            </div>
            <div className="flex-1 font-medium text-xl rounded-md cursor-pointer">
              <input
                type="text"
                placeholder="Area/Address"
                className="p-2 w-full text-xl font-medium text-center bg-gray-200 rounded-md border border-neutral-400"
              />
            </div>
            <div className="flex-1 bg-amberYellow font-medium text-xl my-4 py-2 rounded-md cursor-pointer">
              <h2>Next</h2>
            </div>
          </div>
        </div>
      </TopLayout>
    </div>
  );
}

export default BusinessLocation;
