import CTA from "./CTA";
import IMAGE from '../../assets/image.jpg'
import MobileNav from "../Nav/MobileNav";
import HeaderSocials from "./HeaderSocials";
import Navbar from "../Nav/Navbar";

const Header = () => {
    return (
        <header id="header" >
            <Navbar />
            <MobileNav/>
            <div className="container header__container">
                <h1>Hi, I'm<br/><br/>Marcin Kozłowski</h1>
                <h5 className="text-light">Frontend Developer</h5>
                <CTA/>
                <HeaderSocials/>
                <div className="picture__container">
                    <img src={IMAGE} alt="example"/>
                </div>
                <a href="#about" className="scroll__down">Scroll down</a>
            </div>
        </header>
    )
}

export default Header;