
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick, className, link }) => {
  const handleClick = () => {
    if (link) {
      // Open the link in a new tab
      window.open(link, '_blank');
    } else {
      onClick && onClick();
    }
  };

  return (
    <button className={`button ${className}`} onClick={handleClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  link: PropTypes.string, // New prop to specify the link URL
};

export default Button;

