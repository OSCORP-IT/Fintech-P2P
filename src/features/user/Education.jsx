function Education() {
  return (
    <div>
      <h2 className="text-base font-semibold py-2">
        Educational Qualification
        <span className="text-sm text-red-600">*</span>
      </h2>
      <div className="border border-gray-300 p-1 rounded-md">
        <div className="flex items-center gap-2 text-center text-lg font-medium">
          <div className="rounded-md py-2 bg-gray-200 flex-grow w-2/6">
            Exam Name
          </div>
          <div className="rounded-md py-2 bg-gray-200 flex-grow w-3/6">
            Instititute Name
          </div>
          <div className="rounded-md py-2 bg-gray-200 w-1/6">Passing Year</div>
        </div>
        <div className="flex items-center gap-2 text-center text-base mt-1">
          <div className="rounded-md py-1 flex-grow w-2/6">
            <select
              id="exam"
              required
              className="w-full rounded-md px-4 py-3 border border-gray-300"
            >
              <option value="">--Select--</option>
              <option value="ssc">SSC</option>
              <option value="hsc">HSC</option>
              <option value="bachelor">Bachelor</option>
              <option value="masters">Masters</option>
            </select>
          </div>
          <div className="rounded-md py-1 flex-grow w-3/6">
            <input
              type="text"
              name="institute_name"
              id="institute_name"
              placeholder="Institute Name"
              className="text-base text-center font-normal rounded-lg w-full border border-gray-300 py-3"
            />
          </div>
          <div className="rounded-md py-1 w-1/6">
            <input
              type="text"
              name="passing_year"
              id="passing_year"
              placeholder="Passing Year"
              className="text-base text-center font-normal rounded-lg w-full border border-gray-300 py-3"
            />
          </div>
        </div>
        <div className="py-2">
          <h2 className="text-base font-medium py-1 rounded-md cursor-pointer bg-emeraldGreen text-white text-center">
            Add Education +
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Education;
