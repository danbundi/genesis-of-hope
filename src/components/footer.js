import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer>
                <h4>CONTACT US</h4>

                <div className="socials">
                    <Link className="Flinks_socials"><i className="fa-brands fa-instagram"></i></Link>
                    <Link className="Flinks_socials"><i className="fa-brands fa-x-twitter"></i></Link>
                    <Link className="Flinks_socials"><i className="fa-brands fa-youtube"></i></Link>
                    <Link className="Flinks_socials"><i className="fa-brands fa-tiktok"></i></Link>
                </div>

                <Link className="Fcontact"><i class="fa-solid fa-envelopes-bulk"></i> <span>genesisofhope@gmail.com</span></Link>
                <Link className="Fcontact"><i class="fa-solid fa-phone"></i> <span>+254705155010</span></Link>
            </footer>
        </>
    )
}

export default Footer;

<>
<div className="footer">
                    
                    
                </div>

                <div className="bottom">
                    <p>Copyright &copy;2025; Designed by <span className="designer">DIENBI</span></p>
                </div>

                </>