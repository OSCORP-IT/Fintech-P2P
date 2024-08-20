function H1({ children, addedClass }) {
  return (
    <h1
      className={`text-[42px] font-extrabold text-textColor1 font-poppins ${addedClass}`}
    >
      {children}
    </h1>
  );
}

export default H1;
