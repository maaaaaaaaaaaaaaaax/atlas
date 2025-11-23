import React from "react";

interface CitationProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Citation: React.FC<CitationProps> = ({
  children,
  className = "citation",
  ...props
}) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};
