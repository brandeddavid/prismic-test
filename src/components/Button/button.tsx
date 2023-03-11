import React from "react";

interface ButtonProps {
  children: any;
  onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps): JSX.Element => (
  <button
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    onClick={onClick}
  >
    {children}
  </button>
);

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
