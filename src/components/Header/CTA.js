import "./header.css"
import CV from '../../assets/CV.pdf'

const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className="btn">Check my CV</a>
            <h5 className="text-light">and</h5>
            <a href="#contact" className="btn btn-primary">Contact me!</a>
        </div>
    )
}

export default CTA;