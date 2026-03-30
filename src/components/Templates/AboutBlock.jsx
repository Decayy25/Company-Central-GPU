import { Fragment } from "react";
import Layout from "../Molecules/Layout"

const LayoutAbout = [
    { id: 1, Title: "Visi Misi",Text: "Test", ColorText: "text-[var(--Radeon)]" },
    { id: 2, Title: "Test",Text: "Abc", ColorText: "text-[var(--Radeon)]" },
    { id: 3, Title: "Test",Text: "123", ColorText: "text-[var(--Radeon)]", grid: "md:col-span-2" },
];

export default function () {
    return (
        <Fragment>
            <div className="grid grid-cols-2 gap-4">
                {LayoutAbout.map((item) => (
                    <Layout
                        key={item.id}
                        Title={item.Title}
                        Text={item.Text}
                        ColorText={item.ColorText}
                        grid={item.grid}
                    />
                ))}
                
            </div>
        </Fragment>
    )
}