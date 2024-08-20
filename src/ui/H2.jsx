function H2({ children, addedClass }) {
  return (
    <h2 className={`font-bold text-3xl text-textColor2 ${addedClass}`}>
      {children}
    </h2>
  );
}

export default H2;
