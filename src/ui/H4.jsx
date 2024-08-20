function H4({ children, addedClass }) {
  return (
    <h4 className={`text-textColor1 font-bold text-2xl ${addedClass}`}>
      {children}
    </h4>
  );
}

export default H4;
