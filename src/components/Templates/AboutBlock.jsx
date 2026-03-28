import { Fragment } from "react";
import Layout from "../Molecules/Layout"

const LayoutAbout = [
    { id: 1, Title: "Visi Misi",Text: "Test", ColorText: "text-[var(--Radeon)]" },
    { id: 2, Title: "Test",Text: "Abc", ColorText: "text-[var(--Radeon)]" },
    { id: 3, Title: "Test",Text: "123", ColorText: "text-[var(--Radeon)]" },
];

export default function () {
    return (
        <Fragment>
            <div className="flex justify-between items-center mx-auto">
                {LayoutAbout.map((item) => (
                    <Layout
                        key={item.id}
                        Title={item.Title}
                        Text={item.Text}
                        ColorText={item.ColorText}
                    />
                ))}
                
            </div>
        </Fragment>
    )
}