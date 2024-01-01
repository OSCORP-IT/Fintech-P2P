function CompanyInfo() {
  return (
    <>
      <div className="flex gap-8">
        <div className="w-1/2">
          <h2 className="text-base font-semibold py-2">Company Address</h2>
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
          <h2 className="text-base font-semibold py-2">Company Website</h2>
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
          <h2 className="text-base font-semibold py-2">Supervisor Name</h2>
          <input
            type="text"
            name="supervisor_name"
            id="supervisor_name"
            placeholder="Supervisor Name"
            className="py-2.5 px-4  text-xl font-normal rounded-lg w-full border border-gray-300"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-base font-semibold py-2">Supervisor Phone</h2>
          <input
            type="text"
            name="supervisor_phone"
            id="supervisor_phone"
            placeholder="Supervisor Phone"
            className="py-2.5 px-4  text-xl font-normal rounded-lg w-full border border-gray-300"
          />
        </div>
      </div>
    </>
  );
}

export default CompanyInfo;
