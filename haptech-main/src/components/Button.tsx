import React from 'react'

type ButtonProps = {
    children: React.ReactNode;
    OnClick?: () => void;
    type?: "button" | "submit" | "reset";
};

const Button = ({children, OnClick, type="button"}: ButtonProps) => {
  return (
   <button type={type} onClick={OnClick} className='btn'>
        {children}
   </button>
  )
}

export default Button