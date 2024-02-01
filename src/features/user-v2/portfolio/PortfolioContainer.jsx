import { useParams } from "react-router-dom";
import ProfileLayout from "../ProfileLayout";
import BasicInfo from "./BasicInfo";
import PortfolioStepDisplay from "./PortfolioStepDisplay";
import PorfessionalInfo from "./PorfessionalInfo";

function PortfolioContainer() {
  const { infoStep } = useParams();
  let step;
  if (infoStep === "basic_info") step = 1;
  if (infoStep === "professional_info") step = 2;
  if (infoStep === "upload_documents") step = 3;
  if (infoStep === "bank_details") step = 4;
  if (infoStep === "guarantor_info") step = 5;
  return (
    <ProfileLayout>
      <div className="rounded-md cards h-full p-4 bg-white relative flex justify-between gap-4">
        <div className="w-1/4">
          <PortfolioStepDisplay
            step={step}
            percent={(100 / 5) * (step - 1)}
            label="basic information"
          />
        </div>
        {step === 1 && <BasicInfo />}
        {step === 2 && <PorfessionalInfo />}
      </div>
    </ProfileLayout>
  );
}

export default PortfolioContainer;
