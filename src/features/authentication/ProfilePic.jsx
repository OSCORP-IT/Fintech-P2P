import Layout from "./Layout";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function ProfilePic() {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <Layout>
      <div>
        <h2 className="text-base font-bold text-emeraldGreen">
          Upload Your Profile Picture
        </h2>
      </div>
      <div className="flex items-center justify-center py-10">
        <div className="flex flex-col p-2 rounded-full items-center justify-center border-2 border-dotted border-black w-max">
          <label
            htmlFor="fileInput"
            className="cursor-pointer bg-amberYellow rounded-full"
          >
            <AiOutlinePlus size={50} />
          </label>
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={handleFileChange}
            accept=".jpg, .jpeg, .png, .gif"
          />
        </div>
        <p className="my-4">
          {selectedFile ? `Selected: ${selectedFile.name}` : ""}
        </p>
      </div>
      <div onClick={() => navigate("/")} className="flex justify-center py-8">
        <div className="flex items-center gap-1 bg-emeraldGreen px-5 py-2 rounded text-white font-semibold cursor-pointer">
          <h3>Sign Up</h3>
          <MdArrowOutward />
        </div>
      </div>
    </Layout>
  );
}

export default ProfilePic;
