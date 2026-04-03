import { Fragment } from "react";
import Icon from "../../assets/material/Logo.png"

interface LogoProps {
    logo?: string;
    size?: number;
    border?: string;
}

export default function Logo (props: LogoProps) {
    const { logo = Icon, size = 40, border} = props;
    return (
        <Fragment>
                <img
                    src={logo}
                    className={`w-${size} h-${size} border-${border} mb-4`} alt="" 
                />
        </Fragment>
    )
}