import { ContentContainer } from "../_components/ContentContainer";
import { Footer } from "../_components/Footer/Footer";
import { Navbar } from "../_components/Navbar/Navbar";
import { TTRSignature } from "../_components/TTRSignature";

export default function Page() {
  return (
    <div>
      <Navbar />
      <ContentContainer maxWidth="max-w-5xl">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-center text-xl">
              To get us started and make it happen, Take the Reins Youth Stable
              for Life needs….
            </span>
            <span className="text-center text-4xl font-bold">You!</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-lg font-semibold">
              Your Support is Vital!
            </span>
            <span className="text-md font-light">
              Take the Reins Youth Stable for Life is unique in central Indiana.
              Other equine programs in our area may focus on a special target
              population, have minimal or basic youth and horse interaction, and
              may even run the program on a fee for service basis. Typically a
              comprehensive equine program such as ours is seen as being only
              for people of means. For the under-resourced and low income youth
              of central Indiana, Take the Reins is a free program.{" "}
              <TTRSignature /> youth are investing in their own lives to become
              productive citizens, and you are KEY to helping them fulfill their
              mission!
            </span>
            <span className="text-md font-light">
              There are many ways you can help us move forward with our mission.
              You can volunteer in more ways than you can imagine! But for now,
              please consider supporting Take the Reins by donating to help us
              move through our three development Phases.
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-lg font-semibold">
              Moving Forward In Phases...
            </span>
            <div className="w-full">
              <div className="flex w-11/12 flex-col gap-1">
                <div className="flex flex-col gap-1 rounded-xl p-1 md:border md:border-solid md:border-b-stone-300 md:border-l-stone-300">
                  <div className="flex flex-row gap-2 rounded-md bg-sky-400 px-4 py-2 leading-none shadow-xl md:w-1/3 md:self-start">
                    <div className="flex flex-col">
                      <span className="font-semibold text-sky-900">
                        Phase 1
                      </span>
                      <span className="font-semibold text-sky-900">
                        Launch 45K
                      </span>
                      <span className="text-xs font-light text-sky-800">
                        Getting Take the Reins up and running
                      </span>
                    </div>
                    <div className="flex-grow" />
                    <div className="flex flex-col items-center justify-center">
                      <a href="/donate">
                        <span className="rounded-xl border border-sky-800 bg-sky-300 px-2 py-3">
                          Donate
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-0 rounded-md bg-red-400 px-4 py-2 leading-none shadow-xl md:w-1/3 md:self-center">
                    <span className="font-semibold text-red-900">Phase 2</span>
                    <span className="font-semibold text-red-900">
                      Operational Campaign
                    </span>
                    <span className="text-xs font-light text-red-800">
                      Staffing and operating the full program
                    </span>
                  </div>
                  <div className="flex flex-col gap-0 rounded-md bg-emerald-400 px-4 py-2 leading-none shadow-xl md:w-1/3 md:self-end">
                    <span className="font-semibold text-emerald-900">
                      Phase 3
                    </span>
                    <span className="font-semibold text-emerald-900">
                      Bring it on Home Campaign
                    </span>
                    <span className="text-xs font-light text-emerald-800">
                      A capital campaign for a home base
                    </span>
                  </div>
                </div>
                <div className="hidden md:flex md:flex-row">
                  <span className="text-sm text-stone-400">2025</span>
                  <div className="flex-grow" />
                  <span className="text-sm text-stone-400">20xx</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row flex-wrap items-baseline gap-1 md:gap-8">
              <span className="text-lg font-semibold">Phase 1: Launch 45K</span>
              <span className="text-md font-light italic">
                Getting Take the Reins Up and Running
              </span>
            </div>
            <span>
              Phase 1 will last from one to four years and be folded into the
              regular operational phase as Take the Reins grows to a full time,
              fully operational program.
            </span>
          </div>
          <div>
            <div className="flex flex-row flex-wrap items-baseline gap-1 md:gap-8">
              <span className="text-lg font-semibold">
                Phase 2: Operational Campaign
              </span>
              <span className="text-md font-light italic">
                Staffing and Operating The Full Program
              </span>
            </div>
          </div>
          <div>
            <div className="flex flex-row flex-wrap items-baseline gap-1 md:gap-8">
              <span className="text-lg font-semibold">
                Phase 3: Bring It Home Campaign
              </span>
              <span className="text-md font-light italic">
                A Capital Campaign For a Home Base
              </span>
            </div>
          </div>
        </div>
      </ContentContainer>
      <Footer />
    </div>
  );
}
