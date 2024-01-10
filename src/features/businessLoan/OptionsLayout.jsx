function OptionsLayout({ answers }) {
  return (
    <div className="pt-6 pb-4 flex flex-col items-center">
      {answers.map((item, index) => (
        <div
          key={index}
          className="py-4 bg-white border border-gray-400 w-[450px] text-center rounded-md text-xl font-medium text-neutral-700 my-2"
        >
          <h2>{item}</h2>
        </div>
      ))}
    </div>
  );
}

export default OptionsLayout;
