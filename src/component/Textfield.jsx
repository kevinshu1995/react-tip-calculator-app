import React from "react";

// import Clsx from "/src/hooks/clsx.js";
import Input from "./Input.jsx";
import Label from "./Label.jsx";

export default function Textfield({
    inputId,
    label,
    placeholder,
    img,
    defaultValue,
    number,
    trim,
}) {
    const Img = img;
    return (
        <div className="space-y-2">
            <Label labelFor={inputId}>{label}</Label>
            <div className="relative">
                <Input
                    inputId={inputId}
                    placeholder={placeholder}
                    padding="py-2 pl-12 pr-4"
                    relative
                    defaultValue={defaultValue}
                    number={number}
                    trim={trim}
                />
                <Img className="absolute z-20 left-0 top-1/2 -translate-y-1/2 w-4 h-4 ml-4" />
            </div>
        </div>
    );
}
