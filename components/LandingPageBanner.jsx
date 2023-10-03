export function LandingPageBanner() {
  return (
      <div className="landing-banner flex flex-col h-[720px]  mt-[4.5rem] border-y-2">
          <div className="border-2 flex flex-col md:flex-row h-full flex-grow">
              <div className="w-full md:w-2/3 border-2 flex flex-col justify-between p-5">
                  <div className="flex flex-col ">
                      <p className="font-HKGroteskRegular md:text-8xl text-4xl">
                          Ready to analyse some articles?
                      </p>
                    </div>
                      <div className="">
                          <p className="md:text-lg text-base">
                              Paste in any article you want and we will analyze it for any logical fallacies such as Ad Hominem, Strawman, Appeal to Authority, False Dichotomy, Slippery Slope, Confirmation Bias, and Bandwagon. A report will be generated 
                          </p>
                      </div>
                  
              </div>
              <div className="border-1 w-full md:w-1/3 flex justify-center items-start">
                  <img src="openAiLogo.png" className="w-1/2" alt="OpenAI Logo"/>
              </div>
          </div>
      </div>
  );
}

  