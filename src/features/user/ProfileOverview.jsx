import ProfileLayout from "./ProfileLayout";
import cover from "../../assets/profileCover.png";
import avatar from "../../assets/avatar.png";
import { ImLocation2 } from "react-icons/im";

function ProfileOverview() {
  return (
    <ProfileLayout>
      <div className="px-4 py-6">
        <div className="w-full rounded-md">
          <img src={cover} alt="cover photo" className="w-full" />
        </div>
        <div className="flex px-[50px] gap-6">
          <div className="-mt-16">
            <div className="rounded-full bg-amberYellow w-[150px] h-[150px] flex overflow-hidden items-end justify-center">
              <img
                src={avatar}
                alt="profile avatar"
                className="w-[120px] h-[120px]"
              />
            </div>
            <div className="flex justify-between text-black/50 font-semibold">
              <h2 className="cursor-pointer">Update</h2>
              <h2 className="cursor-pointer">Delete</h2>
            </div>
          </div>
          <div className="py-4">
            <h2 className="text-2xl text-emeraldGreen font-semibold">
              Abidur Rahman
            </h2>
            <div className="flex gap-8 pt-2 text-black/50">
              <h5>Software Engineer @ OSCORP</h5>
              <div className="flex gap-1 items-center">
                <ImLocation2 />
                <h5>Banani, Dhaka-1220.</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex w-full items-center gap-4 pt-6 pb-4 text-lg font-semibold border-b border-gray-200">
            <div className="w-2/6 text-black/50">
              <h2>Your Name</h2>
            </div>
            <div className="w-3/6 text-emeraldGreen">
              <h2>Abidur Rahman</h2>
            </div>
            <div className="w-1/6 text-end text-amberYellow cursor-pointer">
              <h2>Edit</h2>
            </div>
          </div>
          <div className="flex w-full items-center gap-4 py-4 text-lg font-semibold border-b border-gray-200">
            <div className="w-2/6 text-black/50">
              <h2>Email</h2>
            </div>
            <div className="w-3/6 text-emeraldGreen">
              <h2>abid@oscorpint.com</h2>
            </div>
            <div className="w-1/6 text-end text-amberYellow cursor-pointer">
              <h2>Edit</h2>
            </div>
          </div>
          <div className="flex w-full items-center gap-4 py-4 text-lg font-semibold border-b border-gray-200">
            <div className="w-2/6 text-black/50">
              <h2>Subscription Type</h2>
            </div>
            <div className="w-3/6 text-emeraldGreen">
              <h2>
                Basic
                <sub className="text-amberYellow cursor-pointer">(UPGRADE)</sub>
              </h2>
            </div>
          </div>
          <div className="flex w-full items-center gap-4 py-4 text-lg font-semibold border-b border-gray-200">
            <div className="w-2/6 text-black/50">
              <h2>Time Zone</h2>
            </div>
            <div className="w-3/6 text-emeraldGreen">
              <h2>( GMT+6 ) Dhaka, Bangladesh</h2>
            </div>
            <div className="w-1/6 text-end text-amberYellow cursor-pointer">
              <h2>Edit</h2>
            </div>
          </div>
          <div className="flex w-full items-center gap-4 py-4 text-lg font-semibold border-b border-gray-200">
            <div className="w-2/6 text-black/50">
              <h2>Language</h2>
            </div>
            <div className="w-3/6 text-emeraldGreen">
              <h2>English</h2>
            </div>
            <div className="w-1/6 text-end text-amberYellow cursor-pointer">
              <h2>Edit</h2>
            </div>
          </div>
          <div className="flex w-full items-center gap-4 py-4 text-lg font-semibold">
            <div className="w-2/6 text-black/50">
              <h2>Password</h2>
            </div>
            <div className="w-3/6 text-emeraldGreen">
              <h2>*******</h2>
            </div>
            <div className="w-1/6 text-end text-amberYellow cursor-pointer">
              <h2>Edit</h2>
            </div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
}

export default ProfileOverview;
