import React, { useRef } from "react";

import Clsx from "/src/hooks/clsx.js";

import Label from "./Label.jsx";

export default function SelectTip() {
    return (
        <fieldset className="space-y-2">
            <Label>Select Tip %</Label>
            <div className="-mx-2 flex flex-wrap gap-y-3">
                <Radio id="selectTip-five" value="5" text="5%" checked />
                <Radio id="selectTip-ten" value="10" text="10%" />
                <Radio id="selectTip-fifteen" value="15" text="15%" />
                <Radio id="selectTip-twentyFive" value="25" text="25%" />
                <Radio id="selectTip-fifty" value="50" text="50%" />
                <Radio
                    id="selectTip-custom"
                    value="custom"
                    text="Custom"
                    custom
                />
            </div>
        </fieldset>
    );
}

function Radio({ id, text, value, custom, checked }) {
    const ref = useRef(null);

    function focus(event) {
        event.target.checked && ref.current?.focus();
    }
    return (
        <div className="px-2 w-1/2 md:w-1/3">
            <input
                type="radio"
                id={id}
                name="tips"
                className="sr-only peer"
                value={value}
                defaultChecked={checked}
                onChange={custom && focus}
            />
            <label
                htmlFor={id}
                className={Clsx(
                    "py-2.5 block cursor-pointer whitespace-nowrap",
                    "bg-very-dark-cyan hover:bg-opacity-90",
                    "peer-checked:bg-strong-cyan peer-checked:text-very-dark-cyan",
                    "font-bold text-2xl rounded-lg",
                    custom &&
                        "bg-lighter-grayish-cyan hover:shadow text-2xl transition-all",
                    custom
                        ? "text-right text-dark-grayish-cyan px-5"
                        : "text-center text-white px-3",
                    custom && "peer-checked:hidden"
                )}
            >
                {text}
            </label>
            {custom && (
                <input
                    ref={ref}
                    id="custom"
                    name="custom"
                    type="text"
                    placeholder={text}
                    className={Clsx(
                        "w-full border-2 outline-none rounded-lg bg-lighter-grayish-cyan  hover:shadow font-bold text-2xl text-right transition-all",
                        "hidden peer-checked:block py-2 px-4",
                        "border-transparent focus:border-strong-cyan text-very-dark-cyan"
                    )}
                />
            )}
        </div>
    );
}
