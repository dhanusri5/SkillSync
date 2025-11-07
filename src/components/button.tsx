import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
};

export default function Button({ 
  children, 
  variant = "primary", 
  fullWidth = true,
  size = "medium",
  className = "", 
  ...props 
}: ButtonProps) {
  const cls = [
    'ss-btn',
    `ss-btn-${variant}`,
    `ss-btn-${size}`,
    fullWidth ? 'ss-btn-full' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}