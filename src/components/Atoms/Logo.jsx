import { Fragment } from "react";
import Icon from "../../assets/material/Logo.png"

export default function Logo (props) {
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