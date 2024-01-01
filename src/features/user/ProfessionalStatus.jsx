function ProfessionalStatus() {
  return (
    <div className="w-full">
      <h2 className="text-base font-semibold py-2">
        Employment Name<span className="text-sm text-red-600">*</span>
      </h2>
      <div className="flex gap-4 text-xl justify-between items-center font-semibold">
        <div className="flex gap-2">
          <input type="radio" name="employment" value="salaried" checked />
          <h5>Salaried</h5>
        </div>
        <div className="flex gap-2">
          <input type="radio" name="employment" value="self" />
          <h5>Self-employed</h5>
        </div>
        <div className="flex gap-2">
          <input type="radio" name="employment" value="retired" />
          <h5>Retired</h5>
        </div>
        <div className="flex gap-2">
          <input type="radio" name="employment" value="others" />
          <h5>Others</h5>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalStatus;
