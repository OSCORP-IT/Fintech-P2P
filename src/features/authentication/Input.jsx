function Input({ id, placeholder, type, required, children }) {
  return (
    <div className="w-full mt-4 rounded-md border-2 border-textColor1 text-textColor1  flex gap-2 items-center justify-between pl-4">
      {children}
      <input
        type={type}
        name={id}
        id={id}
        required={required ? required : false}
        placeholder={placeholder}
        className="py-3 rounded-md flex-grow px-0.5 border-none"
      />
    </div>
  );
}

export default Input;
