import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';
import "./footer.css";

const Footer = () => {
  return (
    <div className='huddle__footer section__padding'>
      <div className='huddle__footer-icons__container'>
        <div className='huddle__footer-icons'>
          <a href="#">< FaFacebookF/></a>
          <a href="#">< FaTwitter /></a>
          <a href="#">< FaInstagram /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer