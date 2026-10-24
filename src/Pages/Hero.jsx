import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import Left from "./left.jsx";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    type: "original",
    image:
      "https://img.magnific.com/premium-photo/shopping-cart-with-box-front-blue-background_337384-117966.jpg",
  },
  {
    id: 2,
    tag: "New Arrivals",
    title: "Step Into Style",
    text: "Fresh sneakers, up to 40% off this week.",
    cta: "Shop Sneakers",
    link: "/category/sneakers",
    bg: "bg-[#FFC857]",
    textColor: "text-[#10243E]",
    btn: "bg-[#10243E] text-white",
  },
  {
    id: 3,
    tag: "Home & Living",
    title: "Make Your Space Yours",
    text: "Decor and essentials starting at just ₹499.",
    cta: "Explore Home",
    link: "/category/home",
    bg: "bg-[#7FD6C8]",
    textColor: "text-[#10243E]",
    btn: "bg-[#10243E] text-white",
  },
  {
    id: 4,
    tag: "Audio Sale",
    title: "Hear Every Detail",
    text: "Headphones and speakers, free delivery on all orders.",
    cta: "Shop Audio",
    link: "/category/audio",
    bg: "bg-[#10243E]",
    textColor: "text-white",
    btn: "bg-[#FFC857] text-[#10243E]",
  },
];

export default function HeroSlider() {
  return (
    <section aria-label="Featured offers" className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="h-[350px] md:h-[500px]"
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            {s.type === "original" ? (
              <div className="relative h-full w-full">
                <img
                  className="h-full w-full object-cover"
                  src={s.image}
                  alt="Shopping Cart"
                />
                <div className="absolute inset-0 flex items-center">
                  <Left />
                </div>
              </div>
            ) : (
              <div
                className={`relative flex h-full items-center overflow-hidden ${s.bg} ${s.textColor}`}
              >
                <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
                  <span className="mb-3 inline-block rounded-full bg-black/10 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    {s.tag}
                  </span>
                  <h2 className="mb-3 max-w-[14ch] text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                    {s.title}
                  </h2>
                  <p className="mb-6 max-w-[38ch] text-base opacity-90 md:text-lg">
                    {s.text}
                  </p>
                  <a
                    href={s.link}
                    className={`inline-block rounded-xl px-6 py-3 font-bold transition hover:brightness-90 ${s.btn}`}
                  >
                    {s.cta}
                  </a>
                </div>

                <span className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-black/10 md:h-96 md:w-96" />
                <span className="absolute -bottom-24 right-24 h-56 w-56 rounded-3xl bg-white/20 md:h-72 md:w-72" />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}