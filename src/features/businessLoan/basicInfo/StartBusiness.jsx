import DatePicker from "react-datepicker";
import TopLayout from "../TopLayout";

function StartBusiness() {
  return (
    <div>
      <TopLayout question={"When did you start your business?"}>
        <div className="flex justify-center py-4">
          <div className="flex flex-col w-min justify-center text-center">
            <div className="flex-none flex justify-center items-center">
              <div className="text-center text-xl font-bold">
                <DatePicker
                  required
                  id="monthYear"
                  showMonthYearPicker
                  placeholderText="MM-YYYY"
                  dateFormat="MM/yyyy"
                  className="bg-gray-200 py-2 text-center text-xl text-neutral-700 font-medium rounded-md border border-neutral-400"
                />
              </div>
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

export default StartBusiness;
