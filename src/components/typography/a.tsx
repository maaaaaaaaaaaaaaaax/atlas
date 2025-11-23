import React from "react";

interface AProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export const A: React.FC<AProps> = ({ children, className = "", ...props }) => {
  return (
    <a className={className} {...props}>
      {children}
    </a>
  );
};
