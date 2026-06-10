// components/Footer.tsx
import Image from "next/image";
import React from "react";
import { FaLinkedin, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-[#059669]  to-[#023022] m-1 border border-[#059669] rounded-2xl text-white py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:pt-8 justify-between gap-10">
        {/* Logo & tagline */}

        <div className="">
          <Image
            src="/image/logo.png" // replace with your logo
            alt="Bimentor"
            width={90}
            height={20}
            className="aspect-video rounded-3xl mb-8"
          />
          <p className="text-lg">Yolunu bilenle yola çık, yol açık.</p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2  md:grid-cols-3 gap-10 md:gap-40 text-base">
          <div>
            <h3 className="font-bold mb-6">HAKKIMIZDA</h3>
            <ul className="space-y-5">
              <li>
                <a className="hover:text-[#059669]" href="">
                  Biz Kimiz
                </a>
              </li>
              <li>
                <a className="hover:text-[#059669]" href="">
                  Hikayemiz
                </a>
              </li>
              <li>
                <a className="hover:text-[#059669]" href="">
                  Ekip
                </a>
              </li>
              <li>
                <a className="hover:text-[#059669]" href="">
                  Kariyer
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-6">KAYNAKLAR</h3>
            <ul className="space-y-5">
              <li>
                <a className="hover:text-[#059669]" href="">
                  Blog
                </a>
              </li>
              <li>
                <a className="hover:text-[#059669]" href="">
                  Atölyeler
                </a>
              </li>
              <li>
                <a className="hover:text-[#059669]" href="">
                  Etkinlikler
                </a>
              </li>
              <li>
                <a className="hover:text-[#059669]" href="">
                  Yardım Merkezi
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-6">İLETİŞİM</h3>
            <ul className="space-y-5">
              <li>
                <a className="hover:text-[#059669]" href="">
                  Bize Ulaşın
                </a>
              </li>
              <li>
                <a className="hover:text-[#059669]" href="">
                  Destek
                </a>
              </li>
              <li>
                <a className="hover:text-[#059669]" href="">
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a className="hover:text-[#059669]" href="">
                  Kullanım Şartları
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom copyright & social icons */}
      <div className="mt-10 border border-[#9EF5FF] rounded-full p-5 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2025 Bimentor. Tüm hakları saklıdır.</p>
        <div className="flex gap-4 mt-3 md:mt-0 text-gray-200">
          <a className="hover:text-[#059669]" href="">
            <FaLinkedin size={20} />
          </a>
          <a className="hover:text-[#059669]" href="">
            <FaTwitter size={20} />
          </a>
          <a className="hover:text-[#059669]" href="">
            <FaYoutube size={20} />
          </a>
          <a className="hover:text-[#059669]" href="">
            <FaFacebook size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
