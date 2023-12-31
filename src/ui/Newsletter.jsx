function Newsletter() {
  return (
    <div className="w-full bg-gradient-to-l from-gray-200 to-orange-50">
      <div className="px-[120px] flex items-center justify-center py-6">
        <div className="w-2/3 px-4">
          <h2 className="text-2xl font-bold">
            Financial well-being for everyone.
          </h2>
          <p className="py-6">
            Everything we do is centered around empowering you to meet your
            personal financial goals by enabling access to a broad range of
            financial products, services, and educational resources, all
            designed to help you pay less when borrowing and earn more when
            saving.
          </p>
          <div className="border border-red-500 text-red-500 font-bold px-6 text-xl py-1 w-max">
            <p>Contact Us</p>
          </div>
        </div>
        <div className="w-1/3 text-start py-6 pl-4 ">
          <h2 className="text-2xl font-bold text-emeraldGreen uppercase">
            Join Our Newsletter
          </h2>
          <p className="py-2">
            Tools, tips, and insights to improve your financial health.
          </p>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="w-full border border-gray-400 text-center py-1 bg-white"
          />
          <div className="bg-amberYellow my-4 py-1.5 uppercase text-center font-semibold text-white">
            Subscribe
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
