function FormInput({ type, id, placeholder, required }) {
  return (
    <div className="pb-6">
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg p-4"
      />
    </div>
  );
}

export default FormInput;
