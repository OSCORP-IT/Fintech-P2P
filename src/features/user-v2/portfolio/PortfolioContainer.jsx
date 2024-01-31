import { useParams } from "react-router-dom";
import ProfileLayout from "../ProfileLayout";
import BasicInfo from "./BasicInfo";

function PortfolioContainer() {
  const { infoStep } = useParams();
  return (
    <ProfileLayout>{infoStep === "basic_info" && <BasicInfo />}</ProfileLayout>
  );
}

export default PortfolioContainer;
