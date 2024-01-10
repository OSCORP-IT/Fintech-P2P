import TopLayout from "../TopLayout";

function AnnualRevenue() {
  return (
    <div>
      <TopLayout question={"What is your annual revenue?"}>
        <div className="flex justify-center py-4">
          <div className="flex flex-col w-max justify-center text-center">
            <div className="flex-none bg-gray-200 rounded-md border border-neutral-400 flex justify-center items-center">
              <div className="text-center p-2 text-xl font-bold">
                <h2>৳</h2>
              </div>
              <div>
                <input
                  type="text"
                  className="bg-gray-200 py-2 text-center text-xl text-neutral-700 font-medium rounded-md"
                  placeholder="Annual Revenue"
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

export default AnnualRevenue;
