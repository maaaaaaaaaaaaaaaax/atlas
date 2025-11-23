import React from "react";

interface BackpageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Backpage: React.FC<BackpageProps> = ({
  children,
  className = "backpage",
  ...props
}) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};
