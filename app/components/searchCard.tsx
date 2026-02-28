export default function SearchCard() {
  return (
    <div className="m-5">
      <div className="relative -m-40  w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-md p-6 mb-10 md:mb-25">
        <div className="">
          {/* Keyword */}
          <div className="mb-4 ">
            <label className="text-sm font-medium text-gray-700">
              Anahtar Kelime
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                placeholder="Kelime ile ara..."
                className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </span>
            </div>
          </div>

          {/* Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Kategori
              </label>
              <select className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#059669]">
                <option>Tüm Kategoriler</option>
                <option>Yazılım</option>
                <option>Tasarım</option>
                <option>Pazarlama</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Ücret Aralığı
              </label>
              <select className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#059669]">
                <option>All Prices (USD)</option>
                <option>0 - 50</option>
                <option>50 - 100</option>
                <option>100+</option>
              </select>
            </div>
          </div>

          {/* Button */}
          <button className="w-full bg-[#059669] hover:bg-green-500 cursor-pointer text-white font-medium py-2 rounded-lg transition">
            🔍 Anahtar Kelime
          </button>

          {/* Footer Info */}
          <div className="mt-4 text-xs  md:text-lg text-[#7F7F7F] flex  gap-3 md:gap-4">
            <span className="text-center">
              Uzman Mentor : <b className="text-black font-bold">10,000+</b>
            </span>
            <span className="text-center">
              Farklı Sektör : <b className="text-black font-bold">50+</b>
            </span>
            <span className="text-center">
              Ortalama Puan : <b className="text-black font-bold">4.9+</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
