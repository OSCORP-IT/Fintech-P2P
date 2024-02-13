function GradientHeader({ addedClass, children, to }) {
  const bg = `bg-gradient-to-${to}`;
  return (
    <h2
      className={`text-transparent bg-clip-text inline-block ${bg} from-teal-900 from-5% to-textGradientTo ${addedClass}`}
    >
      {children}
    </h2>
  );
}
export default GradientHeader;
