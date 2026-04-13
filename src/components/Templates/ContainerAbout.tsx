import { Fragment } from "react"
import Button from "../Atoms/Button";

interface AboutContainerProps {
    Color: string;
    className?: string;
}

export default function AboutContainer(props: AboutContainerProps) {
    const { Color, className = "max-w-7xl" } = props;

    return (
        <Fragment>
            <div
                className={`${className} mx-auto px-4 md:px-8 py-12 `}
            >
                <p className={`${Color} mx-2 text-xl`}>
                    Diluncurkan tahun 2026, Central GPU merupakan sebuah 
                    platform yang menyediakan pengalaman berbelanja online
                    perangkat elektronik yang mudah, aman, dan cepat bagi 
                    pelanggan melalui dukungan pembayaran dan logistik yang kuat.
                </p>
                <Button 
                    className={"hover:bg-(--Nvidia) w-64 transition"}
                    Title="Shop now"
                />
            </div>
        </Fragment>
    );
}