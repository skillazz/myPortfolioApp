import {BsCheck2Square} from "react-icons/bs";
import "./experience.css"

const Experience = () => {
    return (
        <section id="experience">
            <div className="container experience__container">
                <div className="knowledge__tab">
                    <h3>Tech stack:</h3>
                    <div className="knowledge__content">
                        <article className="knowledge__details">
                            <BsCheck2Square />
                            <h4>HTML</h4>
                            <small>regular</small>
                        </article>
                        <article className="knowledge__details">
                            <BsCheck2Square />
                            <h4>CSS</h4>
                            <small>regular</small>
                        </article>
                        <article className="knowledge__details">
                            <BsCheck2Square />
                            <h4>Bootstrap</h4>
                            <small>regular</small>
                        </article>
                        <article className="knowledge__details">
                            <BsCheck2Square />
                            <h4>MUI</h4>
                            <small>regular</small>
                        </article>
                        <article className="knowledge__details">
                            <BsCheck2Square />
                            <h4>JavaScript</h4>
                            <small>junior</small>
                        </article>
                        <article className="knowledge__details">
                            <BsCheck2Square />
                            <h4>ReactJS</h4>
                            <small>junior</small>
                        </article>
                        <article className="knowledge__details">
                            <BsCheck2Square />
                            <h4>Redux</h4>
                            <small>junior</small>
                        </article>
                    </div>
                </div>

                <div className="tools__tab">
                    <h3>Tools:</h3>
                    <div className="knowledge__content">
                        <article className="knowledge__details">
                            <BsCheck2Square />
                            <h4>Git</h4>
                            <small className="text-light">regular</small>
                        </article>
                        <article className="knowledge__details">
                            <BsCheck2Square />
                            <h4>Figma</h4>
                            <small>regular</small>
                        </article>
                        <article className="knowledge__details">
                            <BsCheck2Square />
                            <h4>Postman</h4>
                            <small>regular</small>
                        </article>
                        <article className="knowledge__details">
                            <BsCheck2Square />
                            <h4>Trello</h4>
                            <small>regular</small>
                        </article>
                        <article className="knowledge__details">
                            <BsCheck2Square />
                            <h4>Webstorm</h4>
                            <small>regular</small>
                        </article>
                        <article className="knowledge__details">
                            <BsCheck2Square />
                            <h4>VS Code</h4>
                            <small>regular</small>
                        </article>
                        <article className="knowledge__details">
                            <BsCheck2Square />
                            <h4>Linux</h4>
                            <small>regular</small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;