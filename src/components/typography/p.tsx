import React from "react";

interface PProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const P: React.FC<PProps> = ({ children, className = "", ...props }) => {
  return (
    <p className={className} {...props}>
      {children}
    </p>
  );
};
