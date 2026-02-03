import culturalCeremony from "@/assets/cultural-ceremony.jpg";
import schoolClassroom from "@/assets/school-classroom.jpg";
import heroCampus from "@/assets/hero-campus.jpg";
import founderPortrait from "@/assets/founder-portrait.jpg";

const cards = [
  {
    id: "co-curricular",
    title: "Co-curricular\nActivities",
    description:
      "Fine Arts, Music, Dance, and Dramatics. The school emphasizes learning beyond the classroom through diverse creative and performing arts.",
    circleImage: culturalCeremony,
  },
  {
    id: "instructors",
    title: "Professional\nInstructors",
    description:
      "Dedicated activity programs led by professional instructors for music, arts, and sports, nurturing each child's interests and talents.",
    circleImage: schoolClassroom,
  },
  {
    id: "celebrations",
    title: "Festivals &\nFounder's Day",
    description:
      "Celebration of Independence Day, Dasara, Ganesha Chaturthi, Krishna Janmashtami, and Founder's Day as part of our value-based education.",
    circleImage: heroCampus,
  },
  {
    id: "competitions",
    title: "Competitions &\nSummer Camps",
    description:
      "Regular drawing and cultural competitions, and annual summer camps for children aged 6 to 13 years within the school premises.",
    circleImage: founderPortrait,
  },
];

export default function EducationHolisticSection() {
  return (
    <section
      id="holistic"
      className="holistic-offer-section min-h-screen bg-[hsl(175,35%,14%)] py-20 px-4 xl:px-8 flex flex-col justify-center text-center"
    >
      <span className="text-amber-200/90 text-lg max-w-lg mx-auto mb-2 capitalize flex items-center justify-center gap-3">
        What we're offering
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="text-amber-400 w-6 h-6"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
      </span>
      <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl mx-auto mb-16 leading-snug">
        Beyond the Classroom
      </h1>
      <p className="text-white/80 text-lg max-w-2xl mx-auto mb-12 font-sans">
        Holistic development through activities, celebrations, and camps.
      </p>
      <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto w-full">
        {cards.map((card, index) => (
          <div key={card.id} className="holistic-card bg-[hsl(175,32%,18%)] p-8 md:p-10 relative overflow-hidden">
            <div
              className="holistic-card__circle"
              style={{
                backgroundImage: `url(${card.circleImage})`,
              }}
              aria-hidden
            />
            <div
              className={
                index === 0 || index === 2
                  ? "relative z-10 lg:pr-44"
                  : "relative z-10 lg:pl-44"
              }
            >
              <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl font-serif font-normal whitespace-pre-line leading-tight">
                {card.title}
              </h2>
              <p className="text-gray-400 holistic-card__text transition-colors duration-300">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
