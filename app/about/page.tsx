import { ContentContainer } from "../_components/ContentContainer";
import { Footer } from "../_components/Footer/Footer";
import { Navbar } from "../_components/Navbar/Navbar";
import { TeamMemberCard } from "./TeamMemberCard";

export default function Page() {
  return (
    <div>
      <Navbar />
      <ContentContainer>
        <span className="pb-2 text-4xl font-semibold text-stone-900">
          Our Team
        </span>
        <span className="text-md pb-12 text-center font-thin text-stone-900">
          Take The Reins is a 501(c)(3) nonprofit founded in 2023 focusing on
          being facilitators of a structured, safe-haven environment where
          opportunity gap-effected youth are encouraged to be involved in
          applied learning, hard work, supportive interaction, and teamwork.
        </span>
        <div className="flex flex-col gap-8 pb-4">
          <TeamMemberCard
            descriptions={[
              "Jeff Weaver graduated from the University of Georgia College of Pharmacy in 1983 and enjoyed a career of thirty-one years with Eli Lilly and Company. There, he developed skills in facilitating strategic planning which has enabled him to pursue other dreams. His wife Brenda's passion for horses rekindled his own long-lost love for horses, and he began riding.",
              "In 2016, Jeff started Jacobs Creek Racing LLC, and standardbred racing stable that now has six active racehorses. Through close friends who are teachers in Indianapolis and Philadelphia, Jeff has become aware of the issues that face many inner-city children. After reading Kareem Rosser's book Crossing the Line, and getting to know fellow rider (and inner-city teacher) Alison Haag at Essig Farms, Jeff began to transform a dream into a plan for Take The Reins Youth Stable for Life.",
            ]}
            imageSrc="/images/horse-2.webp"
            name="Jeff Weaver"
            title="Founder and Executive Director"
          />
          <TeamMemberCard
            descriptions={[
              "We are actively seeking someone interested in joining as a Program Director.",
            ]}
            imageSrc="/images/horse-2.webp"
            name="To Be Filled"
            title="Program Director"
          />
        </div>
      </ContentContainer>
      <Footer />
    </div>
  );
}
