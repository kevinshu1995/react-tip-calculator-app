import React, { useEffect, useState } from "react";
// import Clsx from "/src/hooks/clsx.js";
import Input from "./Input.jsx";
import Label from "./Label.jsx";

export default function Textfield({
    value,
    type,
    inputId,
    label,
    placeholder,
    img,
    defaultValue,
    errorMsg,
}) {
    const [isError, setIsError] = useState(false);
    const Img = img;

    useEffect(() => {
        setIsError(errorMsg);
    }, [errorMsg]);

    return (
        <div className="space-y-2">
            <div className="flex flex-wrap">
                <Label labelFor={inputId}>{label}</Label>
                <p>{errorMsg}</p>
            </div>
            <div className="relative">
                <Input
                    value={value}
                    type={type}
                    inputId={inputId}
                    placeholder={placeholder}
                    padding="py-2 pl-12 pr-4"
                    relative
                    defaultValue={defaultValue}
                    isError={isError}
                />
                <Img className="absolute z-20 left-0 top-1/2 -translate-y-1/2 w-4 h-4 ml-4" />
            </div>
        </div>
    );
}
