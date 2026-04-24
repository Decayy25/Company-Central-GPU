import { Fragment } from "react";
import Icon from "../../assets/material/Logo.png"

interface LogoProps {
    logo?: string;
    className?: string;
}

export default function Logo (props: LogoProps) {
    const { logo = Icon, className = "w-64 h-64" } = props;
    return (
        <Fragment>
                <img
                    src={logo}
                    className={`${className} mb-4`} alt="" 
                />
        </Fragment>
    )
}