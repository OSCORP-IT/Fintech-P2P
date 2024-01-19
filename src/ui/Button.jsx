import { MdArrowOutward } from "react-icons/md";
function Button({ addedClass, children }) {
  const generalClass =
    "cursor-pointer hover:shadow flex  items-center justify-center rounded-md hover:bg-opacity-80 hover:shadow-inner";
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
