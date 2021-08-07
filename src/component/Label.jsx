import React from "react";
import Clsx from "/src/hooks/clsx.js";

export default function Label({ labelFor, block, children, customClass }) {
    return (
        <label
            className={Clsx(
                "font-bold text-darker-grayish-cyan",
                block && "block",
                customClass
            )}
            htmlFor={labelFor}
        >
            {children}
        </label>
    );
}
