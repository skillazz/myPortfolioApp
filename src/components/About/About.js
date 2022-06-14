import IMAGE from '../../assets/image.jpg'

const About = () => {
    return (
        <section id="about">
            <h5>Let's dive in to the</h5>
            <h2>About section</h2>
            <div className="container about__container">
                <div className="about__wrapper">
                    <div className="about__pic">
                        <img src={IMAGE} alt="example photo"/>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__tiles">
                        <article className="about__tile">
                            <h5>Lorem</h5>
                            <small>Lorem Lorem Lorem*</small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;