import { Button } from "../_components/Button";
import { ContentContainer } from "../_components/ContentContainer";
import { Footer } from "../_components/Footer/Footer";
import { Navbar } from "../_components/Navbar/Navbar";

export default function Page() {
  return (
    <div>
      <Navbar />
      <ContentContainer maxWidth="max-w-3xl">
        <span className="mb-2 self-start text-center text-4xl font-semibold text-stone-700">
          A special thanks and recognition to our partners!
        </span>
        <span className="text-md my-4 text-center font-thin text-stone-800">
          Of course we are just getting started and Take the Reins does not have
          its own facility... yet. We are partnering with outstanding folks and
          equine barns in central Indiana to begin our camps and program. We
          thank these people from the bottom of our hearts for helping us to
          change the lives of our youth and set them on a path to a productive
          and satisfying life!
        </span>
        <div className="mt-16">
          <Button href="/donate">Donate</Button>
        </div>
      </ContentContainer>
      <Footer />
    </div>
  );
}
