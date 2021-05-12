import React from "react"
import web from "../src/images/banner.jpg"
import Common from "./Common";

const Home = () => {
    return (
        <Common
            name="Educate your child with"
            line="we make kids feel like game"
            imgsrc={web}
            visit="/services"
            btname="Get Started"
        />
    );
};

export default Home;