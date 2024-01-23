import Button from "../../ui/Button";
import Sidebar from "./Sidebar";
import avatar from "../../assets/avatar.png";
import { IoChatbubbleEllipsesSharp, IoNotifications } from "react-icons/io5";

function DashboarLayout() {
  return (
    <div className="h-screen bg-backgroundMain flex items-start font-poppins">
      <Sidebar />
      <div className="w-4/5 p-6">
        <div className="flex gap-4 justify-end items-center">
          <Button
            addedClass={
              "py-2 px-4 text-white bg-accentColor font-medium capitalize"
            }
          >
            apply new loan
          </Button>
          <div className="rounded-full p-2 text-textColor1 border border-textColor3 text-[36px] cursor-pointer">
            <IoChatbubbleEllipsesSharp />
          </div>
          <div className="rounded-full p-2 text-textColor1 border border-textColor3 text-[36px] cursor-pointer">
            <IoNotifications />
          </div>
          <div className="h-[75px] w-[75px] rounded-full bg-gray-200 flex items-center justify-center">
            <img
              src={avatar}
              alt="avatar"
              className="object-cover h-[52px] w-[52px] grayscale"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-textColor3">Abidur</h2>
            <h4 className="text-sm font-medium text-textColor3 uppercase pb-1">
              id#1211222
            </h4>
            <button className="rounded-md border border-accentColor text-accentColor font-medium capitalize px-2 py-1 text-sm hover:bg-accentColor hover:text-white">
              edit profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboarLayout;
