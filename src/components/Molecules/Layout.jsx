import { Fragment } from "react";
import "../../index.css"

export default function Layout (props) {
    const {Text, Title, ColorText, grid = " "} = props;
    return (
        <Fragment>
            <div 
                className={`mx-auto px-40 py-20 bg-[#6abea7] border-b-10 
                    border-[var(--Soft-Cyan)] rounded-3xl flex justify-center
                    ${grid}`}
                >
                    <h1>
                        {Title}
                    </h1>
                    <p 
                        className={`${ColorText} mb-10`}
                    >
                    {Text}
                </p>
            </div>
        </Fragment>
    )
}