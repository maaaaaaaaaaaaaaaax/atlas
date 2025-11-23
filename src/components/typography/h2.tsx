import React from "react";

interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const H2: React.FC<H2Props> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <h2 className={className} {...props}>
      {children}
    </h2>
  );
};
