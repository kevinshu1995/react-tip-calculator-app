import React from "react";

import Clsx from "/src/hooks/clsx.js";

export default function Input({
    value,
    inputId,
    type,
    placeholder,
    relative,
    padding,
    extraClass,
    isError = false,
}) {
    return (
        <input
            id={inputId}
            name={inputId}
            type={type || "text"}
            onChange={e => (e.target.value = Number(e.target.value) || value)}
            placeholder={placeholder}
            className={Clsx(
                "w-full border-2 outline-none rounded-lg bg-lighter-grayish-cyan  hover:shadow font-bold text-2xl text-right transition-all",
                extraClass,
                relative && "relative z-10",
                padding ? padding : "py-2 px-4",
                isError
                    ? "border-red-500 focus:border-red-600 text-red-500"
                    : "border-transparent focus:border-strong-cyan text-very-dark-cyan"
            )}
        />
    );
}
