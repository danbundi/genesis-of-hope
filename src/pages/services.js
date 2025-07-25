import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo3.png";
import Footer from '../components/footer';
import HorizontalScroll from 'horizontal-scroll';
import { useRef, useEffect } from 'react';

const serviceItems = [
    {
        title: 'Photography',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nisi sed, vitae esse nam itaque culpa accusantium eveniet voluptatum. Nihil consequuntur facere ea quos? Beatae autem optio voluptas rem odio?"
    },
    {
        title: 'Posters',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nisi sed, vitae esse nam itaque culpa accusantium eveniet voluptatum. Nihil consequuntur facere ea quos? Beatae autem optio voluptas rem odio?"
    },
    {
        title: 'Video',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nisi sed, vitae esse nam itaque culpa accusantium eveniet voluptatum. Nihil consequuntur facere ea quos? Beatae autem optio voluptas rem odio?"
    },
    {
        title: 'Photoshoot',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nisi sed, vitae esse nam itaque culpa accusantium eveniet voluptatum. Nihil consequuntur facere ea quos? Beatae autem optio voluptas rem odio?"
    },
    {
        title: 'Editing',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nisi sed, vitae esse nam itaque culpa accusantium eveniet voluptatum. Nihil consequuntur facere ea quos? Beatae autem optio voluptas rem odio?"
    },
    {
        title: 'Editing',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nisi sed, vitae esse nam itaque culpa accusantium eveniet voluptatum. Nihil consequuntur facere ea quos? Beatae autem optio voluptas rem odio?"
    },
    {
        title: 'Editing',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nisi sed, vitae esse nam itaque culpa accusantium eveniet voluptatum. Nihil consequuntur facere ea quos? Beatae autem optio voluptas rem odio?"
    },
    {
        title: 'Editing',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nisi sed, vitae esse nam itaque culpa accusantium eveniet voluptatum. Nihil consequuntur facere ea quos? Beatae autem optio voluptas rem odio?"
    },
    {
        title: 'Editing',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nisi sed, vitae esse nam itaque culpa accusantium eveniet voluptatum. Nihil consequuntur facere ea quos? Beatae autem optio voluptas rem odio?"
    },
    {
        title: 'Editing',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nisi sed, vitae esse nam itaque culpa accusantium eveniet voluptatum. Nihil consequuntur facere ea quos? Beatae autem optio voluptas rem odio?"
    },
]



const Services = () => {
/*
const containerRef = useRef(null);

useEffect(() => {
if (!containerRef.current) return;

const blocks = containerRef.current.querySelectorAll(".servs");
const container = containerRef.current;

// Plugin initialization AFTER component has mounted
new HorizontalScroll.default({
    blocks: blocks,
    container: container,
    isAnimated: true,
    springEffect: 0.8,
});
}, []); */

  return (
    <>
        <nav className="Snav">
            <img src={logo} alt="" className="Slogo" />
            <div className="Slinks">
                <ul>
                    <li><Link to="/" className="Slink">Home</Link></li>
                    <li><Link to="/videos" className="Slink">Videos</Link></li>
                    <li><Link to="/about" className="Slink">About</Link></li>
                    <li><Link to="/contact" className="Slink">Contact</Link></li>
                </ul>
            </div>
        </nav>

        <hr />

        <div className="Slanding">
            <div className="Stext">
                <h2>Our Services</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus aliquid laboriosam sequi autem quidem at necessitatibus! Sapiente, dolor vitae? Soluta deleniti qui beatae mollitia omnis cumque officia adipisci! Ipsa, mollitia!</p>
            </div>
        </div>

        <section className="scrolling">
            <h2>What We Do</h2>
            <div /*ref={containerRef}*/ className="S-services">
                {serviceItems.map((item, index) => (
                    <div className="servs" key={index}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>

        <Footer></Footer>

    </>
  )
}

export default Services;