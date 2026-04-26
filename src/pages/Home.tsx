import { Fragment } from "react/jsx-runtime";
import Logo from "../components/Atoms/Logo"
export default function Home () {
    return (
        <Fragment>
            <div className="my-20 flex px-10 py-10 rounded-lg">
                <div className="p-1 rounded-full">
                    <Logo
                        className="w-24 h-24 fixed border-none rounded-full m-auto mb-10"
                        hex="hex-border"
                    />
                </div>
            </div>
        </Fragment>
    )
}