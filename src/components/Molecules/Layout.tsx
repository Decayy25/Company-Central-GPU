import { Fragment } from "react";
import "../../index.css"

interface LayoutProps {
    Text: string;
    Title: string;
    ColorText: string;
    Width: string;
    grid?: string;
}

export default function Layout(props: LayoutProps) {
    const { Text, Title, ColorText, Width, grid = " " } = props;
    return (
        <Fragment>
            <div className={`mx-4 px-10 py-15 bg-[#6abea7] border-b-10 
                border-(--Soft-Cyan) rounded-3xl flex flex-col items-center
                ${grid} ${Width}`}
                >
                    <h1 className="mb-10 text-3xl font-semibold">
                        {Title}
                    </h1>

                    <p 
                        className={`${ColorText} mb-10 text-xl font-semibold`}
                    >
                        {Text}
                    </p>
            </div>
        </Fragment>
    )
}