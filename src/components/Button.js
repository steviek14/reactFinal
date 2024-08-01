// Import necessary modules and components
import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom'; 

// Define available button styles and sizes
const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];
const SIZES = ['btn--medium', 'btn--large'];

// Button component definition
export const Button = ({
  children, // Content to be displayed inside the button
  type, // Type of the button element (e.g., 'button', 'submit')
  onClick, // Function to be called when the button is clicked
  buttonStyle, // Style variant of the button
  buttonSize // Size variant of the button
}) => {
  // Determine the button style, default to 'btn--primary' if not valid
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  // Determine the button size, default to 'btn--medium' if not valid
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    // Link component for navigation, wraps the button
    <Link to='/sign-up' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`} // Apply styles based on buttonStyle and buttonSize
        onClick={onClick} // Handle button click event
        type={type} // Set the button type
      >
        {children} {/* Render the button's content */}
      </button>
    </Link>
  );
};
