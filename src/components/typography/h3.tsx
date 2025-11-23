import React from "react";

interface H3Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const H3: React.FC<H3Props> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <h3 className={className} {...props}>
      {children}
    </h3>
  );
};
