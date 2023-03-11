import React from "react";

interface ButtonProps {
  children?: any;
  onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps): JSX.Element => (
  <button className="bg-blue-200 p-10" onClick={onClick}>
    {children}
  </button>
);

Button.defaultProps = {
  children: "+",
  onClick: () => {},
};

export default Button;
