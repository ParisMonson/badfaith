export function LandingPageBanner() {
    return (
      <div className="landing-banner flex flex-col h-[600px] mt-[72px] border-y-2">
        <div className="border-2 flex h-[566px]">
          <div className="w-2/3 border-2 flex flex-col justify-end p-5">
            <div className="flex">
            <p className="font-HKGroteskRegular text-8xl">
            Ready to analyse some articles?
            </p>
            </div>
          </div>
          <div className="border-2 flex w-1/3">
            b
          </div>
        </div>
        <div className="flex flex-row border-2 justify-between p-1">
          <div className="border-2 w-96 h-[64px] font-HKGroteskRegular">
          Available from 18th October
          </div>
          <div className="border-2 w-96 h-[64px]">
            2
          </div>
          <div className="border-2 w-96 h-[64px]">
            3
          </div>
        </div>
      </div>
    );
  }
  