import React from "react";

interface H4Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const H4: React.FC<H4Props> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <h4 className={className} {...props}>
      {children}
    </h4>
  );
};
