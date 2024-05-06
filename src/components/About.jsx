import React from 'react'
import "../styles/About.css"
import Mel2 from "../assets/mel2.jpg"

const About = React.forwardRef(function About(props, ref) {
    return(
        <section className="aboutContain" ref={ref}>
            <div className="aboutContent">
                <img src={Mel2} alt="" />
                <div id="quiSuisJe">
                    <h2>Qui suis-je ?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis excepturi velit minima dolorum optio distinctio mollitia id exercitationem quod quae dicta labore neque nisi possimus rem qui, delectus voluptate, eveniet ipsum hic rerum nam ducimus esse voluptatibus. Culpa sit dolorem nostrum voluptas qui fugit explicabo esse laudantium temporibus neque et pariatur asperiores, quae maxime harum voluptatibus reiciendis soluta cumque magni sint facilis sunt in. Aperiam eos a, magni itaque dolores nihil, error non possimus quisquam ipsum ab reiciendis, labore ad sit earum animi nostrum consectetur. Incidunt, a, magni dignissimos amet voluptatibus voluptas molestias rerum dolorem architecto harum quibusdam in esse!</p>
                </div>
            </div>
        </section>
    )
})

export default (About);