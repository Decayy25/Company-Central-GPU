import { Fragment } from "react";

interface ButtonProps {
    Title: string;
    className?: string;
}

export default function Button(props: ButtonProps){
    const { className, Title } = props;

    return (
        <Fragment>
            <div>
                <button
                    className={`bg-(--Intel) rounded-3xl text-xl p-2 mt-10 text-white 
                        ${className}`}
                >
                    {Title}
                </button>
            </div>
        </Fragment>
    )
}