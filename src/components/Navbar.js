import React, { useState } from "react";
import {
    AiOutlineMenu,
    AiOutlineSearch,
    AiOutlineClose,
    AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    return (
        <section className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            {/* Left side */}
            <div className="flex items-center">
                <div onClick={() => setNav(!nav)} className="cursor-pointer">
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl px-2">
                    Best <span className="font-bold">Eats</span>
                </h1>
                <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
                    <p className="bg-black text-white rounded-full p-2">
                        Delivery
                    </p>
                    <p className="p-2">Pickup</p>
                </div>
            </div>
            {/* Search Input */}
            <div className="bg-gray-200 flex items-center px-2 w-[200px] sm:w-[400px] rounded-full">
                <AiOutlineSearch size={25} />
                <input
                    className="w-full bg-transparent p-2 focus:outline-none"
                    type="text"
                    placeholder="Search"
                />
            </div>
            {/* Cart Button */}
            <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
                <BsFillCartFill className="mr-2" size={20} /> Cart
            </button>
            {/* Mobile Menu */}
            {/* Overlay */}
            <div
                className={
                    nav
                        ? "bg-black/80 w-full h-screen z-10 fixed left-0 top-0 opacity-100 duration-300"
                        : "bg-black/80 w-full h-screen z-10 fixed left-0 top-0 opacity-0 duration-300 pointer-events-none"
                }
            ></div>
            {/* Side drawer menu */}
            <div
                className={
                    nav
                        ? "fixed top-0 left-0 h-screen w-[300px] bg-white z-10 duration-300"
                        : "fixed top-0 left-[-100%] h-screen w-[300px] bg-white z-10 duration-700"
                }
            >
                <AiOutlineClose
                    onClick={() => setNav(!nav)}
                    className="absolute top-4 right-4 cursor-pointer"
                    size={30}
                />
                <h2 className="text-2xl p-4">
                    Best <span className="font-bold">Eats</span>
                </h2>
                <nav>
                    <ul className="flex flex-col p-4 text-gray-800">
                        <li className="text-xl py-4 items-center flex">
                            <TbTruckDelivery className="mr-4" size={25} />
                            Orders
                        </li>
                        <li className="text-xl py-4 items-center flex">
                            <MdFavorite className="mr-4" size={25} />
                            Favorites
                        </li>
                        <li className="text-xl py-4 items-center flex">
                            <FaWallet className="mr-4" size={25} />
                            Wallet
                        </li>
                        <li className="text-xl py-4 items-center flex">
                            <MdHelp className="mr-4" size={25} />
                            Help
                        </li>
                        <li className="text-xl py-4 items-center flex">
                            <AiFillTag className="mr-4" size={25} />
                            Promotions
                        </li>
                        <li className="text-xl py-4 items-center flex">
                            <BsFillSaveFill className="mr-4" size={25} />
                            Best Ones
                        </li>
                        <li className="text-xl py-4 items-center flex">
                            <FaUserFriends className="mr-4" size={25} />
                            Invite Friends
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default Navbar;
