function H3({ children, addedClass }) {
  return (
    <h3 className={`font-arial text-2xl font-semibold ${addedClass}`}>
      {children}
    </h3>
  );
}

export default H3;
