import React from "react"
import Common from "./Common"
import web from "../src/images/about.png"
// import newimg from "../src/images/card1.jpg"


const About = () => {
    return (
        <>
            <Common
                name="Get to know us at"
                imgsrc={web}
                line="you can contact us any time"
                visit="/contact"
                btname="Contact Now"
            />
        </>
    );
};

export default About;