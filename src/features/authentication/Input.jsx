function Input({ label, id, placeholder, type, required }) {
  return (
    <>
      <h2 className="text-lg font-semibold py-2">{label}</h2>
      <input
        type={type}
        id={id}
        placeholder={placeholder ? placeholder : ""}
        required={required ? true : false}
        className="pt-2 bg-gray-200/50 w-full p-2 rounded-full border border-gray-300"
      />
    </>
  );
}

export default Input;
