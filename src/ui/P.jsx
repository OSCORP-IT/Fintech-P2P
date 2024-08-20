function P({ children, addedClass }) {
  return (
    <p className={`text-black/80 text-lg font-normal ${addedClass}`}>
      {children}
    </p>
  );
}

export default P;
