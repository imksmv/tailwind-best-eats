import React from "react";
import HeadlineCards from "./components/HeadlineCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Food from "./components/Food";

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <HeadlineCards />
            <Food />
        </div>
    );
};

export default App;
