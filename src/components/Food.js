import React, { useState } from "react";
import { data } from "../data/data.js";

const Food = () => {
    const [food, setFood] = useState(data);

    // FilterType

    const filterType = (category) =>
        setFood(data.filter((item) => item.category === category));

    // FilterPrice

    const filterPrice = (price) =>
        setFood(data.filter((item) => item.price === price));

    return (
        <div className="max-w-[1640px] mx-auto px-4 py-12">
            <h2 className="text-teal-400 font-bold text-2xl text-center">
                Top Rated Menu Items
            </h2>
            {/* Filter Row */}
            <div className="flex flex-col lg:flex-row justify-between">
                {/* Filter Type */}
                <div className="pb-6 lg:pb-0">
                    <span className="font-bold text-gray-700">Filter Type</span>
                    <div className="flex justify-between">
                        <button
                            onClick={() => setFood(data)}
                            className="m-1 duration-300 border-teal-400 hover:bg-teal-400 hover:text-white text-teal-400"
                        >
                            All
                        </button>
                        <button
                            onClick={() => filterType("burger")}
                            className="m-1 duration-300 border-teal-400 hover:bg-teal-400 hover:text-white text-teal-400"
                        >
                            Burgers
                        </button>
                        <button
                            onClick={() => filterType("pizza")}
                            className="m-1 duration-300 border-teal-400 hover:bg-teal-400 hover:text-white text-teal-400"
                        >
                            Pizza
                        </button>
                        <button
                            onClick={() => filterType("salad")}
                            className="m-1 duration-300 border-teal-400 hover:bg-teal-400 hover:text-white text-teal-400"
                        >
                            Salads
                        </button>
                        <button
                            onClick={() => filterType("chicken")}
                            className="m-1 duration-300 border-teal-400 hover:bg-teal-400 hover:text-white text-teal-400"
                        >
                            Chicken
                        </button>
                    </div>
                </div>
                {/* Filter Price */}
                <div>
                    <span className="font-bold text-gray-700">
                        Filter Price
                    </span>
                    <div className="flex justify-between flex-wrap max-w-[390px]">
                        <button
                            onClick={() => filterPrice("$")}
                            className="m-1 duration-300 border-teal-400 hover:bg-teal-400 hover:text-white text-teal-400"
                        >
                            $
                        </button>
                        <button
                            onClick={() => filterPrice("$$")}
                            className="m-1 duration-300 border-teal-400 hover:bg-teal-400 hover:text-white text-teal-400"
                        >
                            $$
                        </button>
                        <button
                            onClick={() => filterPrice("$$$")}
                            className="m-1 duration-300 border-teal-400 hover:bg-teal-400 hover:text-white text-teal-400"
                        >
                            $$$
                        </button>
                        <button
                            onClick={() => filterPrice("$$$$")}
                            className="m-1 duration-300 border-teal-400 hover:bg-teal-400 hover:text-white text-teal-400"
                        >
                            $$$$
                        </button>
                    </div>
                </div>
            </div>

            {/* Food */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                {food.map((item) => (
                    <div
                        className="shadow-lg hover:scale-105 duration-300"
                        key={item.id}
                    >
                        <img
                            className="w-full h-[200px] object-cover rounded-t-lg"
                            src={item.image}
                            alt={item.name}
                        />
                        <div className="flex justify-between items-center px-2 py-4">
                            <span className="font-bold text-sm md:text-base">
                                {item.name}
                            </span>
                            <span>
                                <span className="bg-teal-400 text-white p-1 rounded-full">
                                    {item.price}
                                </span>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Food;
