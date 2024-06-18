import React from 'react'
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
            className={cn(`py-2 px-4 rounded text-white bg-emerald-400 ${classNames}`, {
                ["pointer-events-none"]: !isActive && isActive !== undefined,
                ["cursor-not-allowed"]: !isActive && isActive !== undefined,
                ["bg-emerald-200/90"]: !isActive && isActive !== undefined
            })}
        >
            {text}
        </button>
    );
};

export default Button;