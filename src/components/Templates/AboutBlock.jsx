import { Fragment } from "react";
import Layout from "../Molecules/Layout"

const LayoutAbout = [
    { id: 1, 
        Title: "Tujuan Kami",
        Text: `Kami percaya pada kekuatan transformatif dari 
            teknologi dan ingin mengubah dunia menjadi lebih baik 
            dengan menyediakan platform untuk menghubungkan pembeli 
            dan penjual dalam satu komunitas.`, 
        ColorText: "text-white", 
        Width: "w-180" 
    },
    { id: 2, 
        Title: "Posisi Kami",
        Text: `Untuk pengguna Internet di seluruh wilayah, 
            Central GPU menawarkan pengalaman belanja online 
            komprehensif, dari berbagai pilihan produk untuk bereksplorasi, 
            dan layanan untuk selalu memenuhi kebutuhan konsumen tanpa hambatan.`, 
        ColorText: "text-white", 
        Width: "w-180" 
    },
    { id: 3, 
        Title: "Cara Kami Beroperasi",
        Text: `Untuk menggambarkan siapa kami - bagaimana kami berbicara, 
            bertindak, dan bereaksi terhadap situasi tertentu - pada dasarnya, 
            kami Simpel, Bahagia, dan Bersama-sama. Nilai-nilai utama ini selalu 
            terlihat dalam setiap langkah perjalanan Central GPU.`, 
        ColorText: "text-white", 
        grid: "md:col-span-2", 
        Width: "w-370" 
    },
];

export default function () {
    return (
        <Fragment>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-4">
                    {LayoutAbout.map((item) => (
                        <Layout
                            key={item.id}
                            Title={item.Title}
                            Text={item.Text}
                            ColorText={item.ColorText}
                            grid={item.grid}
                            Width={item.Width}
                        />
                    ))}
                </div>
            </div>
        </Fragment>
    )
}