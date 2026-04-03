import img from "../assets/material/office.png";
import AboutContainer from "../components/Templates/ContainerAbout"
import AboutBlock from "../components/Templates/AboutBlock"

export default function About() {
  return (
    <section className="max-w-full text-center mt-5 md:mt-15 bg-var(--Blue-Slate)">
        <img src={img} alt="" className="w-full h-full backdrop-blur-lg"/>

        <div className="py-50">
          <h1 
            className="text-xl text-var(--Ocean-Mist) md:text-4xl px-10 font-semibold"
          >
            Central GPU adalah platform belanja online barang elektronik untuk kebutuhan sehari-hari atau hobi.
          </h1>
          <AboutContainer
            Border={"border-none"}
            Color={"text-var(--Icy-Aqua)"}
          />
            
          <AboutBlock/>
        </div>
    </section>
  );
}