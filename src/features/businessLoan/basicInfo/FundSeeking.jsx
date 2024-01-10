import TopLayout from "../TopLayout";
const businessCategories = [
  "Expansion",
  "Equipment Purchase",
  "Finance Accounts Receivable",
  "Inventory",
  "Marketing / Sales",
  "Payroll",
  "Purchase Vehicle(s)",
  "Remodel Building",
  "Refinance Debt",
  "Working Capital / Cash Flow",
  "Others",
];

function FundSeeking() {
  return (
    <div>
      <TopLayout question={"What are you seeking funding for?"}>
        <div className="flex justify-center py-4">
          <div className="flex flex-col w-min justify-center text-center">
            <div className="flex-none flex justify-center items-center">
              <div className="text-center text-xl font-bold">
                <select
                  name="fundFor"
                  id="fundFor"
                  className="bg-gray-200 p-2 text-xl text-neutral-700 font-medium rounded-md border border-neutral-400"
                >
                  <option value="">Select One</option>
                  {businessCategories.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))}
                </select>
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

export default FundSeeking;
