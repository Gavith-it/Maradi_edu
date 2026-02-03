/* 9 gallery images – explicit imports so they always load */
import gallery1 from "@/assets/WhatsApp Image 2026-02-03 at 11.40.49 AM (1).jpeg";
import gallery2 from "@/assets/WhatsApp Image 2026-02-03 at 11.40.50 AM.jpeg";
import gallery3 from "@/assets/WhatsApp Image 2026-02-03 at 11.40.55 AM (1).jpeg";
import gallery4 from "@/assets/WhatsApp Image 2026-02-03 at 11.40.55 AM.jpeg";
import gallery5 from "@/assets/WhatsApp Image 2026-02-03 at 11.40.56 AM (2).jpeg";
import gallery6 from "@/assets/WhatsApp Image 2026-02-03 at 11.40.57 AM (1).jpeg";
import gallery7 from "@/assets/WhatsApp Image 2026-02-03 at 11.41.01 AM (1).jpeg";
import gallery8 from "@/assets/WhatsApp Image 2026-02-03 at 11.41.06 AM (1).jpeg";
import gallery9 from "@/assets/WhatsApp Image 2026-02-03 at 11.41.13 AM (2).jpeg";

const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
];

const imgClasses =
  "w-full h-full object-cover transition-all duration-500 ease-in-out blur-0 group-hover:blur-[0.5px] group-hover:hover:blur-0 brightness-100 group-hover:brightness-50 group-hover:hover:brightness-100 contrast-100 group-hover:contrast-[1.2] group-hover:hover:contrast-110 saturate-[0.2] group-hover:saturate-0 group-hover:hover:saturate-100 scale-100 group-hover:scale-100 group-hover:hover:scale-[1.2] group-hover:delay-300";

function GalleryColumn({ startIndex }: { startIndex: number }) {
  return (
    <div className="education-gallery-column grid gap-4 transition-all duration-500 ease-in-out">
      {[0, 1, 2].map((i) => (
        <article
          key={i}
          className="relative overflow-hidden rounded-xl cursor-pointer h-full shadow-2xl"
        >
          <img
            src={galleryImages[startIndex + i]}
            alt=""
            className={imgClasses}
          />
        </article>
      ))}
    </div>
  );
}

export default function EducationGallerySection() {
  return (
    <section
      id="gallery"
      className="education-gallery-section bg-[hsl(175,35%,14%)] py-16 md:py-20 flex flex-col items-center justify-center px-4"
    >
      <p className="text-amber-200/90 text-sm font-semibold uppercase tracking-widest mb-2">
        Campus & moments
      </p>
      <h2 className="text-white font-serif text-3xl md:text-4xl font-bold mb-12 text-center">
        Gallery
      </h2>
      <div className="education-gallery-inner w-[70vmin] h-[70vmin] min-h-[280px]" data-gallery-grid>
        <div
          className="relative h-full w-full grid gap-4 transition-all duration-500 ease-in-out md:grid-cols-[30cqmin_30cqmin_30cqmin] group before:bg-white/15 before:absolute before:inset-0 before:blur-[80px] hover:before:bg-white/5 before:transition-all before:ease-in-out before:duration-500 before:delay-300 before:rounded-xl pl-4 pt-4"
          role="presentation"
        >
          <GalleryColumn startIndex={0} />
          <GalleryColumn startIndex={3} />
          <GalleryColumn startIndex={6} />
        </div>
      </div>
    </section>
  );
}
