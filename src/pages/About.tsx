import AboutContainer from "../components/Templates/ContainerAbout"
import AboutBlock from "../components/Templates/AboutBlock"


export default function About() {
  return (
      <section className="max-w-full text-center bg-var(--Blue-Slate)">
        <div className="py-50 bg-white">
          <h1 className="text-xl text-var(--Ocean-Mist) md:text-4xl px-10 font-semibold">
            Central GPU adalah platform belanja online barang elektronik untuk
            kebutuhan sehari-hari atau hobi.
          </h1>
          <AboutContainer Color={"text-var(--Icy-Aqua) border-none"} />
          <AboutBlock />
        </div>
      </section>
  );
}