function H5({ children, addedClass }) {
  return (
    <h5 className={`text-textColor1 font-bold text-xl py-2 ${addedClass}`}>
      {children}
    </h5>
  );
}

export default H5;
