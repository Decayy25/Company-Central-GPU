import { Fragment } from "react/jsx-runtime";
// import Hyperlink from "../components/Atoms/Hyperlink";
import Logo from "../components/Atoms/Logo"
export default function Home () {
    return (
        <Fragment>
            <div className={`my-20 flex px-10 py-10 Background-custom`}>
                <div>
                    <Logo
                        className="w-40 h-40 border-none rounded-full"
                    />
                </div>
            </div>
        </Fragment>
    )
}