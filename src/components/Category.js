import React from "react";
import { categories } from "../data/data";

const Category = () => {
    return (
        <div className="max-w-[1640px] px-4 mx-auto py-12">
            <h2 className="font-bold text-teal-400 text-2xl text-center">
                Top Rated Menu Items
            </h2>
            {/* Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
                {categories.map((item) => (
                    <div
                        className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
                        key={item.id}
                    >
                        <h3 className="font-bold sm:text-xl">{item.name}</h3>
                        <img
                            className="w-20"
                            src={item.image}
                            alt={item.name}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
