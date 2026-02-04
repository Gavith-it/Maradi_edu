import schoolClassroom from "@/assets/school-classroom.jpg";
import heroCampus from "@/assets/hero-campus.jpg";

const cards = [
  {
    id: "alumni",
    title: "Alumni",
    image: schoolClassroom,
    imageAlt: "School and alumni",
    content:
      "Former students are in diverse professional fields, including some working abroad and in AI-related domains. The school takes pride in its graduates and stays connected through community events.",
  },
  {
    id: "future",
    title: "Future Vision",
    image: heroCampus,
    imageAlt: "School community and vision",
    content:
      "Proposal to start evening tuition classes for needy students from Class 6 to 10 within the school premises, extending our mission of accessible, value-based education.",
  },
];

export default function EducationAlumniSection() {
  return (
    <div id="alumni" className="alumni-reveal-wrapper bg-[hsl(40,20%,96%)]">
      <div className="mx-auto w-full max-w-4xl px-4 py-8 md:py-10">
        <header className="alumni-reveal-header mb-8 md:mb-10">
          <p className="mb-1.5 font-sans text-sm font-semibold uppercase tracking-widest text-teal-600">
            Our Graduates & Next Steps
          </p>
          <h2 className="font-serif text-3xl font-bold text-[hsl(175,35%,14%)] md:text-4xl">
            Alumni and Future Vision
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-amber-500" />
        </header>

        <main className="alumni-reveal-main">
          {cards.map((card, index) => (
            <section
              key={card.id}
              className={`alumni-reveal-section ${index % 2 === 1 ? "alumni-reveal-section--even" : ""}`}
              style={
                index % 2 === 0
                  ? ({ "--alumni-x": "-100%" } as React.CSSProperties)
                  : ({ "--alumni-x": "100%" } as React.CSSProperties)
              }
            >
              <img
                src={card.image}
                alt={card.imageAlt}
                width={260}
                height={260}
                className="alumni-reveal-section__img"
              />
              <div className="alumni-reveal-section__content">
                <h3 className="font-serif text-lg font-bold text-[hsl(175,35%,14%)] mb-2">
                  {card.title}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  {card.content}
                </p>
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
