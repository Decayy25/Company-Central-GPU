import { Fragment } from "react";
import Icon from "../../assets/material/Logo.png"

interface LogoProps {
    logo?: string;
    className?: string;
    hex?: string;
}

export default function Logo (props: LogoProps) {
    const { logo = Icon, className = "w-64 h-64", hex } = props;
    return (
      <Fragment>
          <a href="https://e-commerce-central-gpu.vercel.app/" target="_blank" className={hex}>
            <img src={logo} className={`${className} hex-border rounded-full `} alt="" />
          </a>
      </Fragment>
    );
}