import React from "react";

export default function Result({ title, subtitle, result }) {
    return (
        <div className="flex items-center">
            <div className="flex flex-col space-y-0">
                <h2 className="text-sm md:text-base font-bold text-white">
                    {title}
                </h2>
                <div className="flex space-x-2 text-xs md:text-sm text-dark-grayish-cyan">
                    <span>/</span>
                    <span>{subtitle}</span>
                </div>
            </div>
            <h3 className="flex-grow text-3xl md:text-5xl font-bold text-right text-strong-cyan">
                ${result}
            </h3>
        </div>
    );
}
