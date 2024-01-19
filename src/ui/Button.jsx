import { MdArrowOutward } from "react-icons/md";
function Button({ addedClass, children }) {
  const generalClass =
    "cursor-pointer hover:shadow flex  items-center rounded-md";
  return (
    <button
      className={`${generalClass} ${
        addedClass ? addedClass : "px-2 bg-accentColor py-1"
      }`}
    >
      <p>{children}</p>
      <MdArrowOutward />
    </button>
  );
}

export default Button;
