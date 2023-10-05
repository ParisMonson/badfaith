export function LandingPageBanner() {
  return (
    <div className="landing-banner flex flex-col h-[720px]  mt-[4.5rem] ">
      <div className=" flex flex-col md:flex-row h-full flex-grow">
        <div className="w-full md:w-2/3  flex flex-col justify-between p-5">
          <div className="flex flex-col max-w-xl ">
            <p className="font-HKGroteskRegular md:text-8xl text-4xl">
              Ready to analyse some articles?
            </p>
          </div>
          <div>
            <p className="text-xl max-w-xl font-thin">
              Paste in any article you want and we will analyze it for any
              logical fallacies such as Ad Hominem, Strawman, Appeal to
              Authority, False Dichotomy, Slippery Slope, Confirmation Bias, and
              Bandwagon. A report will be generated with a score out of 100
              given.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-center items-start">
          <img src="openAiLogo.png" className="w-1/2" alt="OpenAI Logo" />
        </div>
      </div>
    </div>
  );
}
