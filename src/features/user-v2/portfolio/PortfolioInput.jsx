function PortfolioInput({
  label,
  placeholder,
  id,
  type,
  bg,
  defaultValue,
  required,
  nid,
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold py-2 capitalize">
        {label}
        {required && <span className="text-xs text-red-600">*</span>}
        {nid && (
          <span className="text-xs text-gray-600/50">(According to NID)</span>
        )}
      </h2>
      <input
        type={type}
        name={id}
        id={id}
        required={`${required ? required : false}`}
        placeholder={placeholder}
        className={`w-full rounded-md px-4 py-2 border border-gray-300 ${
          bg ? bg : ""
        }`}
        defaultValue={`${defaultValue ? defaultValue : ""}`}
      />
    </div>
  );
}

export default PortfolioInput;
