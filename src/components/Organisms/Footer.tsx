// import { Link } from "react-router-dom";
import { useEffect } from "react";
import Logo from "../Atoms/Logo"
import LayoutList from "../Molecules/LayoutList"
import feather from "feather-icons";
import "devicon/devicon.min.css";


export default function Footer() {
  useEffect(() => {
    feather.replace();
  }, []);


  return (
    <footer className="w-full bg-[#ffff] text-gray-50 mt-12 border-t-2 border-[#5e6973]">
      <div className="max-w-7xl mx-20 px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo Footer */}
          <div>
            <Logo
              size={60}
              border="none"
            />

            <h3 className="text-3xl text-gray-800 font-bold mb-3 ml-5 flex justify-center">
              Central GPU
            </h3>
          </div>

          {/* Layanan Pelanggan */}
          <div className="mt-10">
            <h3 className="text-xl text-gray-800 font-bold mb-4 pb-2 border-b-2 border-[#6abea7]">
              Layanan Pelanggan
            </h3>

            <LayoutList
            />
          </div>

          {/* Ikuti Kami */}
          <div className="mt-10">
            <h3 className="text-xl text-gray-800 font-bold mb-4 pb-2 border-b-2 border-[#6abea7]">
              Ikuti Kami
            </h3>

            <div className="flex gap-4 text-2xl">
              <a href="#" className="text-gray-800 hover:text-[#e9001d]"><i data-feather="facebook"></i></a>
              <a href="#" className="text-gray-800 hover:text-[#e9001d] text-lg"><i className="devicon-twitter-original"></i></a>
              <a href="#" className="text-gray-800 hover:text-[#e9001d]"><i data-feather="instagram"></i></a>
              <a href="#" className="text-gray-800 hover:text-[#e9001d]"><i data-feather="youtube"></i></a>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#bdfffd] py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-green-100 text-sm">
            © 2026 Central GPU. All rights reserved.
          </p>

          <p className="text-green-100 text-sm">
            Made with by Central GPU Team
          </p>

        </div>

      </div>

    </footer>
  );
}