import Image from "next/image";
import { useEffect, useRef } from "react";

const newsItems = [
  {
    src: "/images/news/ap-news.png",
    alt: "AP News",
    url: "https://apnews.com/press-release/ein-presswire-newsmatics/hack-united-unveils-united-hacks-v5-a-global-hackathon-equipping-youth-innovation-with-essential-soft-skills-d95d1a2b7f2b0367502ec18bd0148d08",
  },
  {
    src: "/images/news/fox-40.png",
    alt: "FOX40",
    url: "https://fox40.com/business/press-releases/ein-presswire/825280862/hack-united-unveils-united-hacks-v5-a-global-hackathon-equipping-youth-innovation-with-essential-soft-skills",
  },
  {
    src: "/images/news/abcnews10.png",
    alt: "ABC News10",
    url: "https://www.news10.com/business/press-releases/ein-presswire/825280862/hack-united-unveils-united-hacks-v5-a-global-hackathon-equipping-youth-innovation-with-essential-soft-skills",
  },
  {
    src: "/images/news/digital-jorunal.png",
    alt: "Digital Journal",
    url: "https://www.digitaljournal.com/pr/news/vehement-media/teen-led-hack-united-launches-united-1122733292.html",
  },
  {
    src: "/images/news/benzinga-logo.png",
    alt: "Benzinga",
    url: "https://www.benzinga.com/content/46087906/hack-united-unveils-united-hacks-v5-a-global-hackathon-equipping-youth-innovation-with-essential-sof",
  },
  {
    src: "/images/news/barchart-logo.png",
    alt: "The Globe and Mail",
    url: "https://www.theglobeandmail.com/investing/markets/markets-news/GetNews/33037175/hack-united-empowers-youth-with-soft-skills-at-united-hacks-v5",
  },
];

export default function NewsCarousel() {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Sliding animation for infinite loop
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    let frame: number;
    let start: number | null = null;
    let scrollAmount = 0;
    const speed = 1.2; // px per frame
    const slideWidth = slider.scrollWidth / 2;

    function step(timestamp: number) {
      if (!start) start = timestamp;
      scrollAmount += speed;
      if (slider) {
        if (scrollAmount >= slideWidth) {
          scrollAmount = 0;
        }
        slider.scrollLeft = scrollAmount;
      }
      frame = requestAnimationFrame(step);
    }
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Logo sizing for compact, horizontal look
  const logoWidth = 140;
  const logoHeight = 48;
  const visibleCount = 3;
  const gap = 32;
  const totalWidth = visibleCount * logoWidth + (visibleCount - 1) * gap;

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-2xl bg-[#f7fafc] rounded-3xl shadow-xl py-4 px-4 flex flex-col items-center">
        <h2 className="text-gray-600 text-base sm:text-lg font-semibold mb-4 tracking-wide uppercase self-center text-center">As Seen On...</h2>
        <div
          ref={sliderRef}
          className="relative w-full overflow-hidden"
          style={{ maxWidth: totalWidth, minHeight: logoHeight + 8 }}
        >
          <div
            className="flex flex-row items-center"
            style={{ width: `${(newsItems.length * 2) * (logoWidth + gap)}px`, gap: `${gap}px` }}
          >
            {[...newsItems, ...newsItems].map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
                style={{ minWidth: logoWidth, maxWidth: logoWidth }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={logoWidth}
                  height={logoHeight}
                  className="object-contain h-12 w-auto"
                  priority={idx < 6}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 