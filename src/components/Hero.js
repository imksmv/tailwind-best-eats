import React from "react";

const Hero = () => {
    return (
        <section className="max-w-[1640px] mx-auto px-4">
            <div className="relative">
                {/* Overlay */}
                <div className="absolute bg-black/40 w-full h-full text-gray-200 flex flex-col justify-center">
                    <h2 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                        The <span className="text-teal-400">Best</span>
                        <br />
                        <span className="text-teal-400">Foods</span> Delivered
                    </h2>
                </div>
                <img
                    className="w-full max-h-[500px] object-cover"
                    src="https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Burger with fries"
                />
            </div>
        </section>
    );
};

export default Hero;
