function ProfessionalStatus({ status, handleStatus }) {
  return (
    <div className="w-full">
      <h2 className="text-base font-medium py-2">
        Employment Name<span className="text-xs text-red-600">*</span>
      </h2>
      <div className="flex gap-4 text-base justify-between items-center font-medium">
        <div className="flex gap-2 items-center">
          <input
            type="radio"
            name="employment"
            value="salaried"
            onChange={handleStatus}
            checked={status === "salaried"}
          />
          <h5>Salaried</h5>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="radio"
            name="employment"
            value="self"
            onChange={handleStatus}
            checked={status === "self"}
          />
          <h5>Self-employed</h5>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="radio"
            name="employment"
            value="retired"
            onChange={handleStatus}
            checked={status === "retired"}
          />
          <h5>Retired</h5>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="radio"
            name="employment"
            value="others"
            onChange={handleStatus}
            checked={status === "others"}
          />
          <h5>Others</h5>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalStatus;
