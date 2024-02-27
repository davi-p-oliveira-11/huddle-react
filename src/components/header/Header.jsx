import logo from '../../assets/logo.svg';
import "./header.css";

const Header = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="huddle_logo" />
      </div>
    </div>
  )
}

export default Header