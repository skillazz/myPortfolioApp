import {useState} from "react";
import './nav.css'
import {
    AiOutlineCopyrightCircle,
    AiOutlineHeart,
    AiOutlineHome,
    AiOutlineMessage,
    AiOutlineProject,
    AiOutlineUser
} from 'react-icons/ai'
import {BsAward} from "react-icons/bs";


const Nav = () => {
    const [activeNav, setActiveNav] = useState('#header')
// TODO
// fix the state changes on scroll as well.
    return (
        <nav>
            <p>LOGO PLEASE!</p>
            <div className="nav__sidebar">
                <a href="#header" onClick={() => setActiveNav('#header')}className={activeNav === '#header' ? 'active' : ''}><AiOutlineHome/></a>
                <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
                <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsAward/></a>
                <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineProject/></a>
                <a href="#references" onClick={() => setActiveNav('#references')} className={activeNav === '#references' ? 'active' : ''}><AiOutlineHeart/></a>
                <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage/></a>
                <a href="#footer" onClick={() => setActiveNav('#footer')} className={activeNav === '#footer' ? 'active' : ''}><AiOutlineCopyrightCircle/></a>
            </div>
        </nav>

    )
}

export default Nav;