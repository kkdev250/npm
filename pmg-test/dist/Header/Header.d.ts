import React from 'react';
type HeaderProps = {
    children?: React.ReactNode;
    fontWeight?: "bold" | "normal";
    centerChildren?: React.ReactNode;
    rightChildren?: React.ReactNode;
    color?: string;
    className?: string;
};
export declare const Header: ({ children, fontWeight, centerChildren, rightChildren, color, className, }: HeaderProps) => React.JSX.Element;
export {};
