import schoolClassroom from "@/assets/school-classroom.jpg";

/**
 * Clip-scroll header: two stacked 100vh layers.
 * First: white background, title with image clipped to text (background-clip: text).
 * Second: full background image, same title in white.
 * As user scrolls, the solid layer scrolls away and the image layer is revealed.
 */
export default function EducationClipHeader() {
  return (
    <header className="education-clip-header" style={{ height: "200vh" }}>
      {/* First container: solid background, title with image-in-text */}
      <div
        className="education-clip-container education-clip-container_solid"
        style={{ top: 0 }}
      >
        <div className="education-clip-title_wrapper">
          <h1
            className="education-clip-title education-clip-title_solid"
            style={{
              backgroundImage: `url(${schoolClassroom})`,
              backgroundSize: "100vw auto",
              backgroundPosition: "center",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            Every child has a right to education.
          </h1>
        </div>
      </div>

      {/* Second container: full image background, title in white */}
      <div
        className="education-clip-container education-clip-container_image"
        style={{
          top: "100vh",
          backgroundImage: `url(${schoolClassroom})`,
          backgroundSize: "100vw auto",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        aria-hidden
      >
        <div className="education-clip-title_wrapper">
          <h1 className="education-clip-title education-clip-title_image">
            Every child has a right to education.
          </h1>
        </div>
      </div>
    </header>
  );
}
