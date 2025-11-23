import React from "react";

interface H5Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const H5: React.FC<H5Props> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <h5 className={className} {...props}>
      {children}
    </h5>
  );
};
