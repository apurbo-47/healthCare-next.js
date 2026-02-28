import Image from "next/image";

export default function StorySection() {
  return (
    <section className="max-w-6xl mx-auto p-5 md:p-0 mb-8 md:mb-25">
      <div className="grid md:grid-cols-2 gap-5 md:gap-10  border border-none rounded-xl ">
        {/* Image */}
        <div className="w-full h-65 md:h-full relative rounded-3xl overflow-hidden">
          <Image
            src="/image/hero.png" // public/story.jpg
            alt="Our Story"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <button className="px-5 py-3 border border-[#059669] hover:bg-[#059669] cursor-pointer hover:text-white  rounded-full text-base md:text-xl font-bold mb-5">
            ✳ Our Story
          </button>

          <h2 className="text-2xl md:text-4xl text-[#333333] font-bold mb-5">
            Basit Bir Fikirle Başladık, Şimdi Geleceği Şekillendiren Bir
            Yolculuğun İçindeyiz
          </h2>

          <p className="text-[#4C4C4C] text-sm md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
}
