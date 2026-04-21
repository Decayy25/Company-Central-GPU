import { Fragment } from "react/jsx-runtime";

const journeyItem = [
    { 
        Image: "https://deo.shopeemobile.com/shopee/shopee-careers-live-id/assets/img/about_ourjourney_new_01.d4aca121.jpg", 
        Title: "Launched Shopee in Singapore, Malaysia, Indonesia, Thailand, Taiwan, Vietnam and the Philippines", 
        Desc: "Pada tahun 2015, Shopee diluncurkan di 7 pasar di berbagai wilayah"
    },
    {
        Image: "https://deo.shopeemobile.com/shopee/shopee-careers-live-id/assets/img/about_ourjourney_new_02.6ac2565d.jpg",
        Title: "Launched Shopee in Brazil and Mexico",
        Desc: "Pada tahun 2019, Shopee diluncurkan di 2 pasar di Amerika Latin"
    }
];

export default function Journey () {
    return (
        <Fragment>
            <div>
                <h3>Perjalanan Kami</h3>

                <div className="block mt-40">
                    {journeyItem.map((itemJourney, index) => (
                        <div key={index} className="relative flex min-h-60">
                            
                            <div>
                                <img src={itemJourney.Image} alt="journey" />
                            </div>

                            <div className="m-12 w-2 h-2 bg-var(--Radeon)"></div>

                            <div className="w-1 mx-13 bg-var(--Radeon) scale-x-5 z-1 flex"></div>

                            <div className="w-106.5 text-left flex flex-col pb-2">
                                <h4 className="mb-1 text-[#202325] text-xl">
                                    {itemJourney.Title}
                                </h4>
                                <p>{itemJourney.Desc}</p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </Fragment>
    );
}