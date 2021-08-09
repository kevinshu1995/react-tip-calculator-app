import React, { useState } from "react";

import Clsx from "/src/hooks/clsx.js";
import Input from "./Input.jsx";
import Label from "./Label.jsx";

export default function LabelInput({
    value,
    inputId,
    label,
    placeholder,
    defaultValue,
}) {
    return (
        <div className="relative">
            <Label
                labelFor={inputId}
                customClass={Clsx(
                    `absolute z-20 right-0 top-1/2 -translate-y-1/2 mr-5 text-xl md:text-2xl cursor-text`,
                    value && "hidden"
                )}
            >
                {label}
            </Label>
            <Input
                value={value}
                inputId={inputId}
                defaultValue={defaultValue}
                placeholder={placeholder}
            />
        </div>
    );
}
