export default function Hero() {
  return (
    <section className="relative h-150  bg-[url('/image/hero.png')] bg-cover rounded-xl m-1">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className=" max-w-7xl mx-auto px-4 text-white">
          <div className=" flex justify-center gap-1.5 mb-7 md:mb-10 ">
            <button className="rounded-full border border-white/60 hover:bg-[#059669] cursor-pointer px-4.5 md:px-6 py-2 text-sm md:text-base">
              Mentor Bul
            </button>
            <button className="rounded-full border border-white/60 hover:bg-[#059669] cursor-pointer px-4.5 md:px-6 py-2 text-sm md:text-base">
              Nasıl Çalışır?
            </button>
          </div>
          <h1 className="max-w-2xl text-center text-3xl md:text-5xl font-bold leading-tight">
            Hedeflerinize Uzman <br />
            Mentorlarla Daha Hızlı Ulaşın
          </h1>

          <p className="mt-5 max-w-xl text-center text-base md:text-lg text-gray-200 mb-9 md:mb-18">
            Onaylanmış mentorlarla birebir bağlantı kur, kariyerini hızlandır.
          </p>
        </div>
      </div>
    </section>
  );
}
