import clsx from "clsx";

import { Button } from "./_components/Button";
import { ContentContainer } from "./_components/ContentContainer";
import { Footer } from "./_components/Footer/Footer";
import { IndexNavbar } from "./_components/IndexNavbar";
import { TTRSignature } from "./_components/TTRSignature";

import classes from "./index.module.css";

export default function Home() {
  return (
    <div className="bg-stone-200">
      <IndexNavbar />
      <video
        autoPlay
        className={clsx("pt-0", classes.xHeroVideo)}
        muted
        playsInline
      >
        <source src="/videos/ttr-hero-comp-v6-l.mp4" />
      </video>
      <ContentContainer>
        <div className="flex flex-row items-center justify-center py-12 md:py-20">
          <span className="text-center text-3xl font-light italic text-stone-800 md:text-4xl">
            Youth taking the reins of their future in a stable and productive
            environment.
          </span>
        </div>
        <div className="flex flex-col pb-12 md:pb-20">
          <span id="our-mission" className="text-3xl text-stone-900">
            Our Mission
          </span>
          <div className={clsx("mb-2 bg-stone-400", classes.xDivider)} />
          <span className="text-md items-end text-start font-light text-stone-800 md:text-lg">
            Take the Reins (<TTRSignature />) offers underserved youth the
            opportunity to learn and help themselves through horsemanship and
            animal husbandry in a safe, structured environment. We strive to aid
            youth in developing essential skills and traits to form strong
            family and professional relationships that become core integral
            components of their lives. <TTRSignature /> Youth will realize that
            accomplishment in life comes through applied learning, a strong work
            ethic, and healthy connections with others.
          </span>
        </div>
        <div className="flex flex-col pb-12 md:pb-20">
          <span id="our-mission" className="text-3xl text-stone-900">
            Take The Reins: Youth Stable for Life is...
          </span>
          <div className={clsx("mb-2 bg-stone-400", classes.xDivider)} />
          <span className="text-md items-end text-start font-light text-stone-800 md:text-lg">
            ...a 501(c)(3) nonprofit organization that was newly founded in
            2023. Our community-based prevention and education program focuses
            on central Indiana’s under-resourced youth by providing constructive
            activities in horsemanship, equine sport and educational support. In
            our initial start up phase, Take the Reins programs will focus on
            secondary school students aged 14-18 years of age. Youth must commit
            to a minimum of one year participation are encouraged and expected
            to remain in the program through high school graduation. Learn more
            about our program and getting started!
          </span>
        </div>
        <div className="flex flex-row items-center justify-center gap-4 pb-12 md:pb-20">
          <Button color="primary" href="/donate">
            Donate
          </Button>
          <Button href="/program">Learn About Our Program</Button>
        </div>
      </ContentContainer>
      <Footer />
    </div>
  );
}
