export function LandingPageBanner() {
  return (
    <div className="landing-banner flex flex-col h-[720px]  mt-[4.5rem] ">
      <div className="flex flex-col md:flex-row h-full flex-grow">
        <div className="w-full md:w-1/2  flex flex-col justify-between p-5">
          <div className="flex flex-col max-w-xl mb-12">
            <p className="font-HKGroteskRegular md:text-8xl text-4xl">
              Ready to analyse some articles?
            </p>
          </div>
          <div>
            <p className="text-2xl max-w-xl font-thin">
              Submit an article or opinion piece, and our advanced AI-driven
              analysis will rigorously assess it for potential logical
              fallacies. Based on the evaluation, a 'Badfaith Score' will be
              generated, ranging from 0 to 100. A score closer to 100 indicates
              a higher likelihood of the content being written in bad faith,
              while a score closer to 0 suggests genuine intent.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
          <div className="flex flex-row justify-end w-full">
            <img
              src="openAiLogo.png"
              alt="OpenAI Logo"
              width="221.4"
              height="267.3"
            />
          </div>
          <div>
            <h2 className="font-HKGroteskRegular text-3xl mb-2">
              Logical Fallacies
            </h2>
            <ul className="text-xl max-w-xl font-thin">
              <li>
                <strong>Ad Hominem</strong> - Attacking an opponent's character
                rather than their argument.
              </li>
              <li>
                <strong>Strawman Argument</strong> - Misrepresenting an
                opponent's argument to make it easier to attack.
              </li>
              <li>
                <strong>Appeal to Authority</strong> - Claiming something is
                true because an authority or expert says so.
              </li>
              <li>
                <strong>False Dichotomy</strong> - Presenting only two options
                when more exist, typically "either-or" situations.
              </li>
              <li>
                <strong>Slippery Slope</strong> - Arguing that a specific event
                will lead to a series of negative outcomes without evidence.
              </li>
              <li>
                <strong>Confirmation Bias</strong> - Favoring information that
                confirms one's pre-existing beliefs and ignoring contradictory
                data.
              </li>
              <li>
                <strong>Bandwagon Effect</strong> - Arguing something is correct
                because many people believe or do it.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
