import React from 'react';
import classNames from "classnames";

type HeaderProps = {
  children?: React.ReactNode;
  fontWeight?: "bold" | "normal";
  centerChildren?: React.ReactNode;
  rightChildren?: React.ReactNode;
  color?: string;
  className?: string;
};

export const Header = ({
  children,
  fontWeight,
  centerChildren,
  rightChildren,
  color,
  className,
}: HeaderProps) => {
  const colorStyles = color ? `text-${color}-500` : "";
  return (
    <div
      className={classNames(
        "flex flex-row justify-between",
        colorStyles,
        className
      )}
    >
      <h3 className={`font-${fontWeight}`}>{children}</h3>
      {centerChildren && centerChildren}
      {rightChildren && rightChildren}
    </div>
  );
};
