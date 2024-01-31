import ProfileLayout from "./ProfileLayout";
import TransactionItem from "./TransactionItem";
import WelcomeNote from "./WelcomeNote";

function Transaction() {
  return (
    <ProfileLayout>
      <div className="flex justify-between items-center pt-4 pb-2">
        <WelcomeNote />
        <div className="flex gap-4 items-center">
          <select
            name="sort"
            id="sort"
            className="cursor-pointer border border-neutral-400 rounded-md text-base font-medium px-3 py-2 text-neutral-700"
          >
            <option value="newest">Newest</option>
            <option value="odlest">Oldest</option>
          </select>
          <div className="flex items-center border border-neutral-400 text-white bg-textColor1 rounded-md px-4 capitalize">
            <div>download as</div>
            <select
              name="download"
              id="download"
              className="cursor-pointer bg-textColor1 text-white rounded-md text-base font-medium py-2 px-2 "
            >
              <option value=""></option>
              <option value="pdf">pdf</option>
              <option value="excel">xlsx</option>
            </select>
          </div>
        </div>
      </div>
      <div className="rounded-md cards h-[85%] p-4 bg-white relative">
        <div className="flex justify-between items-center text-start text-sm text-textColor3 uppercase border-b border-gray-300 pb-2">
          <div className="w-3/12">transaction name</div>
          <div className="w-2/12">loan id</div>
          <div className="w-2/12">transaction id</div>
          <div className="w-2/12">date</div>
          <div className="w-2/12">amount</div>
          <div className="w-1/12">status</div>
        </div>
        <div className="pt-2">
          <TransactionItem status={"cancelled"} amount={"20,000"} type={"+"} />
          <TransactionItem status={"completed"} amount={"20,000"} type={"-"} />
        </div>
      </div>
    </ProfileLayout>
  );
}

export default Transaction;
