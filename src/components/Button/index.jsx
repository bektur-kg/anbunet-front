import React from 'react';
import cn from "classnames"

const Button = (
    {
        text,
        isActive,
        classNames,
        type,
        onClick
    }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={cn(`py-2 px-4 rounded text-white bg-emerald-400 ${classNames}`, {["bg-emerald-200"]: !isActive})}
        >
            {text}
        </button>
    );
};

export default Button;