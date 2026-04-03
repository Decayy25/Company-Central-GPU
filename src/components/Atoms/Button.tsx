import { Fragment } from "react";

interface ButtonProps {
    Hover: string;
    Width: string;
    Title: string;
}

export default function Button(props: ButtonProps){
    const { Hover, Width, Title } = props;

    return (
        <Fragment>
            <div>
                <button
                    className={`bg-var(--Intel) rounded-3xl text-xl p-2 mt-10 text-white 
                        ${Hover} ${Width}`}
                >
                    {Title}
                </button>
            </div>
        </Fragment>
    )
}