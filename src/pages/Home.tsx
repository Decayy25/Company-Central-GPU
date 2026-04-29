import { Fragment } from "react/jsx-runtime";
import Logo from "../components/Atoms/Logo"
import dummy from "../assets/material/Product Title.png"
export default function Home () {
    return (
      <Fragment>
        <div className="my-20 mx-auto flex px-10 py-10 min-h-full justify-between bg-white/5">
          <div className="p-1 rounded-full">
            <Logo
              className="w-30 h-30 fixed border-none rounded-full m-auto mb-10"
              hex="hex-border"
            />
          </div>

          <div className="ml-50">
            <h1 className="text-4xl font-bold mb-4 text-center">
              Selamat Datang di Central GPU
            </h1>

            {/* Center Img */}
            <div className="mb-10 mt-20 ml-auto flex justify-center w-lg">
              <img src={dummy} alt="img company" className="rounded-2xl" />
            </div>

            <div className="w-full mb-10">
              <p className="text-white text-lg font-semibold mb-6 text-center">
                Temukan berbagai pilihan GPU terbaik untuk kebutuhan gaming,
                desain grafis, dan komputasi Anda. Kami menyediakan produk
                berkualitas dengan harga kompetitif.
              </p>
            </div>

            <a
              href="#"
              className="inline-block bg-[var(--Icy-Aqua)] text-center text-[var(--Nvidia)] font-semibold px-6 py-3 rounded-lg hover:bg-[var(--Intel)] hover:text-white transition-colors duration-300"
            >
              Jelajahi Koleksi Kami
            </a>
          </div>
        </div>
      </Fragment>
    );
}