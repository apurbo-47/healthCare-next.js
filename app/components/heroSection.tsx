import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative max-w-7xl md:mx-auto md:h-100 rounded-2xl flex items-center justify-center m-5 bg-[#F5F5F5] overflow-hidden mb-8 md:mb-25">
      {/* Floating avatars */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/image/avatar1.png"
          width={48}
          height={48}
          className="absolute top-10 left-3 w-6 md:w-12 md:top-20 md:left-20  rounded-full opacity-22"
          alt=""
        />
        <Image
          src="/image/avatar1.png"
          width={72}
          height={72}
          className="absolute top-30 left-3 w-10 md:w-16 md:top-50 md:left-50  rounded-full opacity-22"
          alt=""
        />
        <Image
          src="/image/avatar1.png"
          width={48}
          height={48}
          className="absolute top-20 left-12 w-6 md:w-12 md:top-18 md:left-70  rounded-full opacity-22"
          alt=""
        />
        <Image
          src="/image/avatar1.png"
          width={48}
          height={48}
          className="absolute w-6 md:w-12 bottom-8 left-6 md:bottom-10 md:left-30  rounded-full opacity-22"
          alt=""
        />

        <Image
          src="/image/avatar1.png"
          width={48}
          height={48}
          className="absolute top-10 right-3 w-6 md:w-12 md:top-20 md:right-20  rounded-full opacity-22"
          alt=""
        />
        <Image
          src="/image/avatar1.png"
          width={72}
          height={72}
          className="absolute top-20 right-12 w-10 md:w-16 md:top-50 md:right-50  rounded-full opacity-22"
          alt=""
        />
        <Image
          src="/image/avatar1.png"
          width={48}
          height={48}
          className="absolute bottom-30 right-2 w-6 md:w-16 md:bottom-18 md:right-12  rounded-full opacity-22"
          alt=""
        />
        <Image
          src="/image/avatar1.png"
          width={48}
          height={48}
          className="absolute w-6 md:w-12 bottom-8 right-6 md:bottom-10 md:right-40  rounded-full opacity-22"
          alt=""
        />
      </div>

      {/* Content box */}
      <div className="relative max-w-2xs md:max-w-xl mx-auto text-center py-5 md:py-10 ">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
          1 dakikadan kısa <br />
          sürede ücretsiz başla
        </h1>

        <p className="mt-4 text-[#333333] text-xs md:text-lg">
          İlgilenen mentorlarla geleceğini inşa et. Topluluğumuza katıl ve
          büyüme yolculuğuna bugün başla.
        </p>

        {/* Input + button */}
        <div className="mt-4 md:mt-6 flex items-center gap-2">
          <input
            type="email"
            placeholder="E-posta adresini gir"
            className="w-full  px-2 py-2 md:px-2 md:py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#059669]"
          />
          <button className="whitespace-nowrap  px-2 py-2 md:px-4 md:py-3 rounded-md cursor-pointer bg-[#059669] text-xs text-white font-semibold hover:bg-green-500 transition">
            Ücretsiz Katıl
          </button>
        </div>

        <p className="mt-3 text-xs text-[#7F7F7F]">
          ✓ Katılım ücretsizdir • Topluluğumuzda ücretsiz ve premium mentorluk
          fırsatlarını keşfet
        </p>
      </div>
    </section>
  );
}
