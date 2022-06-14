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
    return (
        <nav>
            <p>LOGO PLEASE!</p>
            <div className="nav__sidebar">
                <a href="#header"><AiOutlineHome/></a>
                <a href="#about"><AiOutlineUser/></a>
                <a href="#experience"><BsAward/></a>
                <a href="#portfolio"><AiOutlineProject/></a>
                <a href="#references"><AiOutlineHeart/></a>
                <a href="#contact"><AiOutlineMessage/></a>
                <a href="#footer"><AiOutlineCopyrightCircle/></a>
            </div>
        </nav>

    )
}

export default Nav;