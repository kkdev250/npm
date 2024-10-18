import React from 'react';
import classNames from "classnames";
export var Header = function (_a) {
    var children = _a.children, fontWeight = _a.fontWeight, centerChildren = _a.centerChildren, rightChildren = _a.rightChildren, color = _a.color, className = _a.className;
    var colorStyles = color ? "text-".concat(color, "-500") : "";
    return (React.createElement("div", { className: classNames("flex flex-row justify-between", colorStyles, className) },
        React.createElement("h3", { className: "font-".concat(fontWeight) }, children),
        centerChildren && centerChildren,
        rightChildren && rightChildren));
};
