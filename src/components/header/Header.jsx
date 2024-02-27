import logo from '../../assets/logo.svg';
import "./header.css";

const Header = () => {
  return (
    <div className='huddle__header'>
      <div className='huddle__header_logo'>
        <img src={logo} alt="huddle_logo" />
      </div>
    </div>
  )
}

export default Header