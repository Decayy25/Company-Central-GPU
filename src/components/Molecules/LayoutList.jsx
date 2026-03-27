import { Fragment } from "react";
import Hyperlink from "../Atoms/Hyperlink";

const Links = [
    {
        id:1,
        link: "/contact",
        text: "text-gray-800 hover:text-[#589c00]",
        border: "border-none",
        name: "Hubungi Kami"
    },
    {
        id:2,
        link: "#",
        text: "text-gray-800 hover:text-[#589c00]",
        border: "border-none",
        name: "FAQ"
    },
    {
        id:3,
        link: "#",
        text: "text-gray-800 hover:text-[#589c00]",
        border: "border-none",
        name: "Kebijakan Privasi"
    },
    {
        id:4,
        link: "#",
        text: "text-gray-800 hover:text-[#589c00]",
        border: "border-none",
        name: "Syarat & Ketentuan"
    }
];

export default function LayoutList () {
    return (
        <Fragment>
            <div>
                <ul className="space-y-2">
                    {Links.map((item) => (
                        <li key={item.id}>
                            <Hyperlink
                                link={item.link}
                                text={item.text}
                                border={item.border}
                                name={item.name}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    )
}