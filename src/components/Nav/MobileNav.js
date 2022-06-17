import {useState} from "react";
import './mobilenav.css'
import {
    AiOutlineHome,
    AiOutlineMessage,
    AiOutlineProject,
    AiOutlineUser
} from 'react-icons/ai'



const MobileNav = () => {
    const [activeNav, setActiveNav] = useState('#header')
// TODO
// fix the state changes on scroll event as well.
// side navigation bar should be visible only if permalink != #header.

    return (
        <nav>
            <div className="nav__sidebar">
                <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><AiOutlineHome/></a>
                <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
                <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineProject/></a>
                <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage/></a>
            </div>
        </nav>

    )
}

export default MobileNav;