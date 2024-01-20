function GradientHeader({ addedClass, children, to }) {
  return (
    <h2
      className={`text-transparent bg-clip-text inline-block bg-gradient-to-${to} from-teal-900 from-25% to-teal-300 ${addedClass}`}
    >
      {children}
    </h2>
  );
}

export default GradientHeader;
