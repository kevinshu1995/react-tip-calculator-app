import React, { useState } from "react";

import Clsx from "/src/hooks/clsx.js";

export default function Input({
    inputId,
    getValue,
    placeholder,
    relative,
    padding,
    defaultValue = false,
    number = false,
    trim = false,
}) {
    const [inputValue, setInputValue] = useState(
        defaultValue !== false ? defaultValue : ""
    );

    function isNumber(value) {
        return !isNaN(value);
    }

    function changeHandler(e) {
        let value = e.target.value;
        // * is Trim ?
        if (trim) {
            value = value.trim();
            setInputValue(value);
        }
        // * is Number ?
        number && isNumber(value)
            ? setInputValue(value)
            : setInputValue(inputValue);

        return getValue && getValue(value);
    }
    return (
        <input
            id={inputId}
            type="text"
            value={inputValue}
            onChange={changeHandler}
            placeholder={placeholder}
            className={Clsx(
                "w-full border-2 border-transparent outline-none rounded-lg bg-lighter-grayish-cyan text-very-dark-cyan hover:shadow focus:border-strong-cyan font-bold text-2xl text-right transition-all",
                relative && "relative z-10",
                padding ? padding : "py-2 px-4"
            )}
        />
    );
}
