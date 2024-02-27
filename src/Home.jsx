/* eslint-disable jsx-a11y/anchor-is-valid */
import { HiChevronDown } from "react-icons/hi";
import { Link } from 'react-router-dom';
import icon from './img/icon-deal.png';

import React, {useState,useEffect} from "react";

function Home(){
    const [sticky, setSticky] = useState(false);

    useEffect(()=> {
        const handleScroll = () =>{
            setSticky(window.scrollY > 0);
            console.log(window.scrollY);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    })
    return(
        <nav className={`${sticky ? "sticky" :""}`}>
            <div className="nav-inner">
                <div className="logo">
                    <img className="icon" src={icon} alt="iconic"  />
                </div>
                <div className="name">
                    Makaan
                </div>
                <div className="links">


                <div className="home">
                            <Link to="/"  className="color">Home</Link>
                            </div>

                            <div className="about">
                            <Link to="/" className="color">About</Link>
                            </div>


                       <div className="dropdown">
                            <div className="property">property <HiChevronDown /></div>
                            <div className="dropdown-content">
                                <Link to="/">property list</Link>
                                <Link to="/">property type</Link>
                                <Link to="/">property Agent</Link>
                            </div>
                            </div>

                            <div className="dropdown">
                            <div className="pages">pages <HiChevronDown /></div>
                            <div className="dropdown-content">
                                <Link to="/">Testimonial</Link>
                                <Link to="/">404 Error</Link>
                                </div>
                            </div>
                              

                            <div className="contact">
                            <Link to="/"  className="color">contact</Link>
                            </div>
                            <button><Link to="Home"  className="btn-1">Add property</Link></button>
                </div>
               
            </div>
        </nav>
        
    );

}
export default Home;