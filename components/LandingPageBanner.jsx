export function LandingPageBanner() {
  return (
      <div className="landing-banner flex flex-col h-[600px] md:h-auto mt-[4.5rem] border-y-2">
          <div className="border-2 flex flex-col md:flex-row h-full">
              <div className="w-full md:w-2/3 border-2 flex flex-col justify-end p-5">
                  <div className="flex flex-col">
                      <p className="font-HKGroteskRegular md:text-8xl text-4xl">
                          Ready to analyse some articles?
                      </p>
                      <div>
                          <p className="md:text-lg text-base">
                              Paste in any article you want and we will analyze it for any logical fallacies such as Ad Hominem, Strawman, Appeal to Authority, False Dichotomy, Slippery Slope, Confirmation Bias, Bandwagon 
                          </p>
                      </div>
                  </div>
              </div>
              <div className="border-2 w-full md:w-1/3 flex justify-center items-center">
                  <img src="openAiLogo.png" className="md:w-auto w-1/2" alt="OpenAI Logo"/>
              </div>
          </div>
      </div>
  );
}

  