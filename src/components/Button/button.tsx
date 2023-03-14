import React from "react";

interface ButtonProps {
  children: any;
  onClick?: () => void;
  disabled?: boolean;
  type: "button" | "submit" | "reset" | undefined;
  cssClass: string;
}

const getButtonClassName = (cssClass: string): string => {
  let className: string;

  switch (cssClass) {
    case "primary":
      className =
        "text-white bg-gray-900 hover:bg-gray-600 disabled:bg-gray-200 focus:outline-none font-medium rounded-lg text-sm px-6 py-3 text-center";
      break;
    case "link-button":
      className = "font-medium text-gray-900 hover:text-gray-600 underline";
      break;

    case "large":
      className =
        "flex w-full items-center justify-center rounded-md border border-transparent bg-gray-900 hover:bg-gray-600 px-6 py-3 text-base font-medium text-white shadow-sm disabled:bg-gray-200";
      break;

    case "danger":
      className =
        "text-white w-full bg-red-900 hover:bg-red-600 disabled:bg-red-200 focus:outline-none font-medium rounded-lg px-6 py-3 text-center";
      break;
    default:
      className = "";
  }

  return className;
};

const Button = ({
  children,
  onClick,
  disabled,
  type,
  cssClass,
}: ButtonProps): JSX.Element => (
  <button
    className={getButtonClassName(cssClass)}
    onClick={onClick}
    disabled={disabled}
    type={type}
  >
    {children}
  </button>
);

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  cssClass: "primary",
  type: "button",
};

export default Button;
