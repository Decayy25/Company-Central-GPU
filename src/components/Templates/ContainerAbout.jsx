import { Fragment } from "react"
import Button from "../atoms/button";

export default function AboutContainer (props) {
    const { Border, Width ="max-w-7xl"  } = props;

    return (
        <Fragment>
            <div
                className={`${Width} mx-auto px-4 md:px-8 py-12 ${Border}`}
            >
                <p className="text-gray-500 mx-2 text-xl">
                    Diluncurkan tahun 2026, Central GPU merupakan sebuah 
                    platform yang menyediakan pengalaman berbelanja online
                    perangkat elektronik yang mudah, aman, dan cepat bagi 
                    pelanggan melalui dukungan pembayaran dan logistik yang kuat.
                </p>
                <Button 
                    Hover={"hover:bg-[var(--Nvidia)]"}
                    Width={"w-64"}
                    Title="Shop now"
                />
            </div>

            <div
                className=""
            >

            </div>
        </Fragment>
    )
}