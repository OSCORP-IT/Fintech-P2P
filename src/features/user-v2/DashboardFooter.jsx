function DashboardFooter() {
  return (
    <div className="flex gap-4 items-start h-[20%] pt-4">
      <div className="w-2/3">
        <div className="w-full flex justify-between items-center font-medium capitalize">
          <h3 className="text-textColor1 text-sm ">loan offering</h3>
          <h3 className="text-textColor3 text-xs cursor-pointer hover:text-textColor1 ">
            see more..
          </h3>
        </div>
        <div className="flex gap-4 justify-between items-center text-center pt-2 capitalize text-textColor1 font-medium font-sm">
          <div className="cursor-pointer rounded-lg bg-white cards w-1/3 py-6">
            personal loan
          </div>
          <div className=" cursor-pointer rounded-lg bg-white cards w-1/3 py-6">
            business loan
          </div>
          <div className=" cursor-pointer rounded-lg bg-white cards w-1/3 py-6">
            investments
          </div>
        </div>
      </div>
      <div className="w-1/3 flex-grow p-2">
        <div className="rounded-lg  bg-gradient-to-tr from-bgGradient4 to-bgGradient3 py-3 pl-3 capitalize">
          <div className="w-1/2">
            <h1 className="text-[20px] font-medium text-textColor1 pb-4 leading-1">
              download our mobile app
            </h1>
            <button className="capitalize py-2 px-3 text-center text-white bg-accentColor rounded-full text-sm">
              download now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardFooter;
