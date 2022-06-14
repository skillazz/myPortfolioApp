import {BsLinkedin, BsGithub} from "react-icons/bs";


const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://linkedin.com/in/skillazz" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/skillazz" target="_blank" rel="noreferrer"><BsGithub/></a>
        </div>
    )
}

export default HeaderSocials;