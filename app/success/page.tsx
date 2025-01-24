import { ContentContainer } from "../_components/ContentContainer";
import { Navbar } from "../_components/Navbar/Navbar";
import { Button } from "../_components/Button";
import { Footer } from "../_components/Footer/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <ContentContainer maxWidth="max-w-3xl">
        <span className="mb-2 self-start text-4xl font-semibold text-stone-700">
          We Know It Works...
        </span>
        <span className="mb-12 self-end text-3xl font-semibold text-stone-700">
          ...and metrics will be our key!
        </span>
        <span className="text-md mb-4 text-center font-thin text-stone-800">
          The founders and staff of Take the Reins have backgrounds in both
          education and business. Our board of directors is committed to high
          performance standards. From the start of our program, we will seek
          partnerships with schools and with university education departments to
          assess our staff and student’s performance.
        </span>
        <span className="text-md mb-16 text-center font-thin text-stone-800">
          We are results oriented and fully expect the program to be highly
          dynamic. We are committed not only to reporting how our program is
          performing, but also in actively sharing and collaborating with other
          programs similar to ours, both in central Indiana as well as across
          the country.
        </span>
        <span className="mb-4 text-center text-xl font-semibold text-stone-700">
          But for now, the proof is out there... and it works!
        </span>
        <span className="text-md mb-16 text-center font-thin text-stone-800">
          While we may be the first program of its type here in Indiana, we are
          modeling ourselves after highly successful programs in Philadelphia
          (the{" "}
          <a
            href="https://worktoride.net/"
            style={{ textDecoration: "underline" }}
            target="_blank"
          >
            Work to Ride Stable at Chamounix Equestrian Center
          </a>
          ) and Detroit (
          <a
            href="https://www.detroithorsepower.org/"
            style={{ textDecoration: "underline" }}
            target="_blank"
          >
            Detroit Horse Power
          </a>
          ). Both programs have been existence for years and are in the middle
          of major expansion and growth programs.
        </span>
        <div className="mt-16">
          <Button href="/startup-campaign">Our Startup Campaign</Button>
        </div>
      </ContentContainer>
      <Footer />
    </div>
  );
}
