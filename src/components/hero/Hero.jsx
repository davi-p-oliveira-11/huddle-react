import heroData from "../../constants/index"
import mockup from "../../assets/mockup.svg"
import "./hero.css"

const Hero = () => {
  return (
    <div className="huddle__hero section__padding">
      <div className="huddle__hero-image">
        <img src={mockup} alt="mockup" />
      </div>
      <div className="huddle__hero-content">
        <h1>{heroData.title}</h1>
        <p>{heroData.description}</p>
        <button href="#">{heroData.buttonText}</button>
      </div>
    </div>
  )
}

export default Hero