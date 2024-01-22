import { MdArrowOutward } from "react-icons/md";
function Button({ addedClass, children, hover }) {
  const generalClass =
    "cursor-pointer flex gap-1  items-center justify-center rounded-md ";
  const hoverDefault = "hover:bg-opacity-80 hover:shadow-inner";
  return (
    <button
      className={`${generalClass} ${
        addedClass ? addedClass : "px-2 bg-accentColor py-1 "
      }
        ${hover ? hover : hoverDefault}`}
    >
      {children}
      <MdArrowOutward />
    </button>
  );
}

export default Button;
