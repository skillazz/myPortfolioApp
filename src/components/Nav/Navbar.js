import "./navbar.css"

const Navbar = () => {
//TODO
// modify link hrefs, fix routing
    return (
        <>
            <span className="nav__logo-wrapper">LOGO</span>
            <div className="nav__main">
            <a href="/">Home</a>
            {/*inside about section: experience,references*/}
            <a href="/about">About</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/contact">Contact</a>
        </div>
        </>
    )
}

export default Navbar;