import { Fragment } from "react";

export default function Button(props){
    const { Hover, Width, Title } = props;

    return (
        <Fragment>
            <div>
                <button
                    className={`bg-[var(--Intel)] rounded-3xl text-xl p-2 mt-10 text-white 
                        ${Hover} ${Width}`}
                >
                    {Title}
                </button>
            </div>
        </Fragment>
    )
}