import PropTypes from "prop-types";
import logo from "../assets/pepsi.png"

export default function Header({ title }) {
  return (
    <div className='header-container'>
      <div className='header-wrapper'>
        <div className='header-logo'>
          <img src={logo} alt='Logo'/>
        </div>
        <p className='header-title'>{title}</p>
      </div>
      <div className='bg-header'></div>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.objectOf(PropTypes.any).isRequired,
};