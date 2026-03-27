import img from "../assets/material/office.png";
import AboutContainer from "../components/Templates/ContainerAbout"
import AboutBlock from "../components/Templates/AboutBlock"

export default function About() {
  return (
    <section className="max-w-full text-center mt-5 md:mt-15">
        <img src={img} alt="" className="w-full h-full backdrop-blur-lg"/>

        <div className="py-50">
          <h1 
            className="text-xl md:text-4xl px-10 font-semibold"
          >
            Central GPU adalah platform belanja online barang elektronik untuk kebutuhan sehari-hari atau hobi.
          </h1>
          <AboutContainer />
            
          <AboutBlock />
        </div>
    </section>
  );
}