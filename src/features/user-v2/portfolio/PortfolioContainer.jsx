import { useParams } from "react-router-dom";
import ProfileLayout from "../ProfileLayout";
import BasicInfo from "./BasicInfo";
import PortfolioStepDisplay from "./PortfolioStepDisplay";
import PorfessionalInfo from "./PorfessionalInfo";
import BankDetails from "./BankDetails";
import GuarantorInfo from "./GuarantorInfo";

function PortfolioContainer() {
  const { infoStep } = useParams();
  let step;
  let label;
  if (infoStep === "basic_info") {
    step = 1;
    label = "basic information";
  }
  if (infoStep === "professional_info") {
    step = 2;
    label = "professional information";
  }
  if (infoStep === "upload_documents") {
    step = 3;
    label = "upload documents";
  }
  if (infoStep === "bank_details") {
    step = 4;
    label = "bank details";
  }
  if (infoStep === "guarantor_info") {
    step = 5;
    label = "guarantor information";
  }
  return (
    <ProfileLayout>
      <div className="rounded-md cards h-full p-6 bg-white relative flex justify-between gap-4">
        <div className="w-1/4">
          <PortfolioStepDisplay
            step={step}
            percent={(100 / 5) * (step - 1)}
            label={label}
          />
        </div>
        {step === 1 && <BasicInfo />}
        {step === 2 && <PorfessionalInfo />}
        {step === 4 && <BankDetails />}
        {step === 5 && <GuarantorInfo />}
      </div>
    </ProfileLayout>
  );
}

export default PortfolioContainer;
