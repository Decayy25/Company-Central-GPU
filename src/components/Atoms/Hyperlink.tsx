import { Link } from "react-router-dom";
import { Fragment } from "react";

export default function Hyperlink (props) {
    const { link, text, border, name} = props;
    return (
        <Fragment>
            <Link to={link} className={`${text} hover:${border}`}>
              {name}
            </Link>
        </Fragment>
    )
}