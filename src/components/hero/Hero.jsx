import { heroHeading, heroText } from "../../constants/index"
import { mockup } from "../../assets/mockup.svg"
import "./hero.css"

const Hero = () => {
  return (
    <div className="huddle__hero section__padding">
      <div className="huddle__hero-image">
        <img src={mockup} alt="mockup image" />
      </div>
      <div className="huddle__hero-content">
        <h1></h1>
        <p></p>
        <button href="#">Register</button>
      </div>
    </div>
  )
}

export default Hero