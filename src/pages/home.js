import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo3.png"
import pic1 from "../assets/pic1.jpg"
import pic2 from "../assets/pic2.jpeg"
import Footer from "../components/footer";

const Home = () => {
    return (
        <>
            <nav className="Hnav">
                <img src={logo} alt="" className="Hlogo" />

                <div className="Hlinks">
                    <ul>
                        <li><Link to="/videos" className="Hlink">Videos</Link></li>
                        <li><Link to="/services" className="Hlink">Services</Link></li>
                        <li><Link to="/contact" className="Hlink">Contact</Link></li>
                        <li><Link to="/about" className="Hlink">About</Link></li>
                    </ul>
                </div>
            </nav>

            <div className="HLanding">
                <div className="Htext">
                    <h2>POINTING PEOPLE TO LIFE IN JESUS</h2>
                    <p>Know God, find freedom, discover purpose and make a difference.</p>
                    <button className="Hbtn"><Link className="Lbtn">Learn More</Link></button>
                </div>

                <div className="Hpic">
                    <img src={pic1} alt="" />
                    <img src={pic2} alt="" />
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}

export default Home;