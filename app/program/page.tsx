import { Button } from "../_components/Button";
import { ContentContainer } from "../_components/ContentContainer";
import { Footer } from "../_components/Footer/Footer";
import { Navbar } from "../_components/Navbar/Navbar";
import { TTRSignature } from "../_components/TTRSignature";
import { ProgramCard } from "./ProgramCard";

export default function Page() {
  return (
    <div>
      <Navbar />
      <ContentContainer>
        <span className="pb-4 text-4xl font-semibold text-stone-800">
          Our Program
        </span>
        <span className="text-md pb-12 text-center font-thin text-stone-800">
          The name makes it clear- Take the Reins Youth Stable for Life is a
          safe haven nonprofit where youth are given the opportunity to take the
          reins of their life in a stable environment. The students make a
          commitment to work hard, learn, persevere, and cooperate with others
          to achieve both personal and group goals. The youth will move beyond
          school and Take the Reins well-prepared and confident in their ability
          to live a productive and stable life.
        </span>
        <div className="flex w-full flex-col gap-12">
          <div className="flex flex-row self-start">
            <div className="mx-4" style={{ maxWidth: "600px" }}>
              <ProgramCard title="How It Works">
                <span className="text-sm text-stone-600">
                  As we get started, our program is targeting the secondary
                  youth in central Indiana ages 14-18. Students will come to the
                  program either through participation in one of our summer
                  camps or during the school year by applying and interviewing
                  for enrollment. Once entering the program, our students are
                  asked to make a one year commitment and all students will be
                  encouraged to remain in the program through high school
                  graduation.
                </span>
              </ProgramCard>
            </div>
          </div>
          <div className="flex flex-row self-end">
            <div className="mx-4" style={{ maxWidth: "600px", zIndex: 1 }}>
              <ProgramCard title="When Youth Commit To the Program, We Commit To Them">
                <span className="text-sm text-stone-600">
                  We support youth in taking responsibility from the beginning
                  of our program as they build foundational skills in barn
                  management and horse care needed to participate in equine
                  activities and sport.
                  <TTRSignature /> youth will apply their learning to set goals
                  and work a plan for reaching their goals. The ultimate goal is
                  that youth, staff, and of course, their horses- everyone will
                  learn together and see the incredible rewards of goal setting
                  and hard work.
                </span>
              </ProgramCard>
            </div>
          </div>
          <div className="mx-4 self-start" style={{ maxWidth: "500px" }}>
            <ProgramCard title="As we all grow together, each of us finds our place to excel">
              <span className="text-sm text-stone-600">
                <TTRSignature /> youth are encouraged to choose the disciplines
                that interest them as they develop and grow in their abilities.
                They are exposed to a variety of equine sports, competitions and
                activities. At the same time, as youth develop and grow they are
                given opportunities to serve as teacher, coach and mentor to new
                and younger students. Excelling in the equestrian world creates
                a true sense of personal challenge and growth as an individual.
                It also creates the drive within to excel in school work. Our
                staff and volunteers will be here to help with tutoring and
                study time after school as academic achievement is required to
                remain in the program. Graduating from high school with a life
                and work plan are as necessary as achieving equine objectives.
              </span>
            </ProgramCard>
          </div>
          <div className="self-center">
            <Button href="/success">Our Metrics For Success</Button>
          </div>
        </div>
      </ContentContainer>
      <Footer />
    </div>
  );
}
