import React from "react";

interface ButtonProps {
  children: any;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ children, onClick, disabled }: ButtonProps): JSX.Element => (
  <button
    className="text-white bg-gray-900 hover:bg-gray-600 disabled:bg-gray-200 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
};

export default Button;
