import { ICard } from "@/interface/cards";
import Image from "next/image";

const Card = ({ data }: { data: ICard[] }) => {
  return (
    <div className="mb-8 md:mb-25 m-5">
      <div className="max-w-xl mx-auto mb-7 md:mb-15 text-[#333333]">
        <h1 className="text-center text-3xl md:text-5xl font-bold mb-5">
          Topluluğumuzdaki Mentorlarla Tanış
        </h1>
        <p className="text-center text-base md:text-lg ">
          Farklı sektörlerden uzmanlarla başarı yolculuğuna şimdi başla
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {data.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl bg-[#F5F5F5] border border-[#F5F5F5] shadow hover:shadow-lg transition"
          >
            <div className="m-2.5">
              <Image
                src={item.profileImage}
                alt={item.name}
                width={380}
                height={300}
                className=" w-full px-5 pt-7 bg-gradient-to-r from-[#8FD2FF] via-[#FFFFF7] to-[#A0FFE1] rounded-2xl mb-5"
              />

              <h2 className="text-lg  text-[#059669] font-semibold">
                {item.name}
              </h2>
              <p className="text-base mt-3 text-[#333333]">{item.role}</p>

              <p className="mt-2 text-sm text-[#333333]/80">{item.text}</p>

              <button className=" w-full mt-5 rounded-full cursor-pointer bg-[#059669] hover:bg-[#0066CC] px-4 py-3 text-white">
                {item.button}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-5 md:mx-10 md:mt-10">
        <p className="text-base md:text-xl">Tüm Mentorları Gözden Geçir</p>
        <p className="text-base md:text-xl text-[#059669]">hepsini gör</p>
      </div>
    </div>
  );
};

export default Card;
