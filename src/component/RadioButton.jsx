import React from "react";

import Label from "./Label.jsx";

export default function RadioButton({
    inputId,
    inputName,
    inputValue,
    text,
    currentValue,
    setValue,
}) {
    return (
        <Label labelFor={inputId} block>
            <div>
                <input
                    type="radio"
                    id={inputId}
                    name={inputName}
                    value={inputValue}
                    checked={currentValue === inputValue}
                    onChange={e => setValue(Number(e.target.value))}
                    className="hidden peer"
                />
                <span
                    className="
                        py-2.5
                        px-3
                        cursor-pointer
                        bg-very-dark-cyan text-white
                        hover:bg-opacity-90
                        whitespace-nowrap
                        peer-checked:bg-strong-cyan peer-checked:text-very-dark-cyan
                        rounded-lg
                        block text-center font-bold text-2xl
                    "
                >
                    {text}
                </span>
            </div>
        </Label>
    );
}
