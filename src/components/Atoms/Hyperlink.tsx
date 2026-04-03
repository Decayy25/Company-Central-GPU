import { Link } from "react-router-dom";
import { Fragment } from "react";

interface HyperlinkProps {
    link: string;
    text: string;
    border: string;
    name: string;
}

export default function Hyperlink (props: HyperlinkProps) {
    const { link, text, border, name} = props;
    return (
        <Fragment>
            <Link to={link} className={`${text} hover:${border}`}>
              {name}
            </Link>
        </Fragment>
    )
}