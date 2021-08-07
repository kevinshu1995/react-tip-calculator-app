import React, { useState } from "react";

import Clsx from "/src/hooks/clsx.js";
import Input from "./Input.jsx";
import Label from "./Label.jsx";

export default function LabelInput({
    inputId,
    label,
    placeholder,
    clearRadio,
    defaultValue,
    number,
    trim,
}) {
    const [hasValue, setHasValue] = useState(false);

    function getValue(value) {
        setHasValue(Boolean(value));
        clearRadio();
    }

    return (
        <div className="relative">
            <Label
                labelFor={inputId}
                customClass={Clsx(
                    `absolute z-20 right-0 top-1/2 -translate-y-1/2 mr-5 text-xl md:text-2xl cursor-text`,
                    hasValue && "hidden"
                )}
            >
                {label}
            </Label>
            <Input
                inputId={inputId}
                getValue={getValue}
                defaultValue={defaultValue}
                placeholder={placeholder}
                number={number}
                trim={trim}
            />
        </div>
    );
}
