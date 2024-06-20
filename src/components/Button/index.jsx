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
            className={cn(`py-2 px-4 rounded text-white bg-purple-light ${classNames}`, {
                ["pointer-events-none"]: !isActive && isActive !== undefined,
                ["cursor-not-allowed"]: !isActive && isActive !== undefined,
                ["bg-purple-light/50"]: !isActive && isActive !== undefined
            })}
        >
            {text}
        </button>
    );
};

export default Button;