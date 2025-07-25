import React from "react";
import logo from "../assets/logo3.png";
import { Link } from "react-router-dom";
import bibleStudy from "../assets/image.png"
import Footer from "../components/footer";

const About = () => {
    return (
    <>
    
        <nav className="Anav">
            <img src={logo} alt="" className="Alogo" />
            <div className="Alinks">
                <ul>
                    <li><Link to="/" className="Alink">Home</Link></li>
                    <li><Link to="/videos" className="Alink">Videos</Link></li>
                    <li><Link to="/services" className="Alink">Services</Link></li>
                    <li><Link to="/contact" className="Alink">Contact</Link></li>
                </ul>
            </div>
        </nav>
        <hr />

        <div className="Amain">
            <h1>About Us</h1>

            <div className="div">
                <div className="Atext">
                    <h3>Who We Are...</h3>

                    <p>So Genesis of Hope Media is a generally a media house who's Vision is :To be a source of hope and spiritual inspiration through engaging media, and mission: To create Christ-centered, uplifting content that educates, empowers, and encourages individuals in their faith journey.</p>
                </div>

                <div className="Aimg">
                    <img className="blop1" src={bibleStudy} alt="" />
                </div>
            </div>
            <div className="div">
                <div className="Atext">
                    <h3>Our Story</h3>

                    <p>So Genesis of Hope Media is a generally a media house who's Vision is :To be a source of hope and spiritual inspiration through engaging media, and mission: To create Christ-centered, uplifting content that educates, empowers, and encourages individuals in their faith journey.</p>
                </div>

                <div className="Aimg">
                    <img className="blop1" src={bibleStudy} alt="" />
                </div>
            </div>
            <div className="div">
                <div className="Atext">
                    <h3>Tikvah Talks</h3>

                    <p>So Genesis of Hope Media is a generally a media house who's Vision is :To be a source of hope and spiritual inspiration through engaging media, and mission: To create Christ-centered, uplifting content that educates, empowers, and encourages individuals in their faith journey.</p>
                </div>

                <div className="Aimg">
                    <img className="blop1" src={bibleStudy} alt="" />
                </div>
            </div>
            <div className="div">
                <div className="Atext">
                    <h3>Lesson Discussion</h3>

                    <p>So Genesis of Hope Media is a generally a media house who's Vision is :To be a source of hope and spiritual inspiration through engaging media, and mission: To create Christ-centered, uplifting content that educates, empowers, and encourages individuals in their faith journey.</p>
                </div>

                <div className="Aimg">
                    <img className="blop1" src={bibleStudy} alt="" />
                </div>
            </div>
            <div className="div">
                <div className="Atext">
                    <h3>Kick Start Your Sabbath</h3>

                    <p>So Genesis of Hope Media is a generally a media house who's Vision is :To be a source of hope and spiritual inspiration through engaging media, and mission: To create Christ-centered, uplifting content that educates, empowers, and encourages individuals in their faith journey.</p>
                </div>

                <div className="Aimg">
                    <img className="blop1" src={bibleStudy} alt="" />
                </div>
            </div>
            
        </div>

        <Footer></Footer>
        
    </>
    )
}

export default About;