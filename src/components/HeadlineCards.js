import React from "react";

const HeadlineCards = () => {
    return (
        <section className="max-w-[1640px] mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
            {/* Card */}
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute h-full w-full bg-black/40 rounded-xl text-white flex flex-col justify-center items-start">
                    <h3 className="font-bold px-2 text-2xl">BOGO's Out</h3>
                    <p className="px-2">Through 8/26</p>
                    <button className="border-white bg-white text-black m-2">
                        Order Now
                    </button>
                </div>
                <img
                    className="max-h-[160px] md:min-h-[160px] w-full object-cover rounded-xl"
                    src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Wrap"
                />
            </div>
            {/* Card */}
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute h-full w-full bg-black/40 rounded-xl text-white flex flex-col justify-center items-start">
                    <h3 className="font-bold px-2 text-2xl">New Restaurants</h3>
                    <p className="px-2">Added Daily</p>
                    <button className="border-white bg-white text-black m-2">
                        Order Now
                    </button>
                </div>
                <img
                    className="max-h-[160px] md:min-h-[160px] w-full object-cover rounded-xl"
                    src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Steak"
                />
            </div>
            {/* Card */}
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute h-full w-full bg-black/40 rounded-xl text-white flex flex-col justify-center items-start">
                    <h3 className="font-bold px-2 text-2xl">Fast Delivery</h3>
                    <p className="px-2">24/7</p>
                    <button className="border-white bg-white text-black m-2">
                        Order Now
                    </button>
                </div>
                <img
                    className="max-h-[160px] md:min-h-[160px] w-full object-cover rounded-xl"
                    src="https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Wrap"
                />
            </div>
        </section>
    );
};

export default HeadlineCards;
