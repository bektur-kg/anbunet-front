import React from 'react';
import cn from "classnames"

const Button = (
    {
        text,
        isActive,
        type
    }) => {
    return (
        <button
            type={type}
            className={cn("py-2 px-4 rounded text-white bg-green-400", {["bg-green-200"]: !isActive})}
        >
            {text}
        </button>
    );
};

export default Button;