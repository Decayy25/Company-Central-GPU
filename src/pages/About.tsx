import img from "../assets/material/office.png";
import AboutContainer from "../components/Templates/ContainerAbout"

export default function About() {
  return (
    <section className="max-w-full text-center mt-15">
        <img src={img} alt="" className="w-full h-150"/>

        <div className="py-50">
          <h1 
            className="text-4xl px-10 font-semibold"
          >
            Central GPU adalah platform belanja online barang elektronik untuk kebutuhan sehari-hari atau hobi.
          </h1>
          <AboutContainer
            
          />
        </div>
    </section>
  );
}