import React, { useState } from "react";

import { ReactComponent as IconDollar } from "./images/icon-dollar.svg";
import { ReactComponent as IconPerson } from "./images/icon-person.svg";
import Textfield from "./component/Textfield.jsx";
import Result from "./component/Result.jsx";
import SelectTip from "./component/SelectTip.jsx";

// import Clsx from "./hooks/clsx.js";

function App() {
    const initial = {
        bill: 0,
        tips: 5,
        custom: 0,
        people: 0,
    };
    const [{ bill, tips, custom, people }, setData] = useState(initial);

    function formChangeHandler(e) {
        const target = e.currentTarget;
        requestAnimationFrame(() => {
            const formData = new FormData(target);
            const form = Object.fromEntries(
                [...formData.entries()].map(([key, value]) => [
                    key,
                    isNaN(value) ? value : Number(value),
                ])
            );
            setData(form);
        });
    }

    function formResetHandler() {
        setData(initial);
    }

    const tip = tips === "custom" ? custom : tips;
    const perTip = people
        ? Math.floor(((bill * 0.01 * tip) / people) * 100) * 0.01
        : 0;
    const perTotal = people ? Math.floor((bill / people) * 100) * 0.01 : 0;

    return (
        <div className="min-h-screen bg-light-grayish-cyan flex">
            <div className="container mx-auto w-full flex flex-col justify-center">
                <div className="flex flex-wrap flex-column space-y-12 md:space-y-24">
                    <section className="w-full">
                        <h1 className="text-center text-darker-grayish-cyan uppercase font-bold text-3xl md:text-2xl tracking-[0.5em] pt-12 md:pt-0 mb-0">
                            spli <br /> tter
                        </h1>
                    </section>
                    <section className="w-full flex justify-center">
                        <div className="bg-white rounded-2xl w-full max-w-[920px] p-10">
                            <form
                                className="-mx-6 flex flex-wrap space-y-8 md:space-y-0"
                                onChangeCapture={formChangeHandler}
                                onResetCapture={formResetHandler}
                            >
                                <div className="px-6 w-full lg:w-1/2 space-y-7">
                                    <Textfield
                                        value={bill}
                                        inputId="bill"
                                        type="number"
                                        label="Bill"
                                        placeholder="0"
                                        img={IconDollar}
                                    />
                                    <SelectTip />
                                    <Textfield
                                        value={people}
                                        type="number"
                                        inputId="people"
                                        label="Number of People"
                                        placeholder="0"
                                        img={IconPerson}
                                    />
                                </div>
                                <div className="px-6 w-full lg:w-1/2">
                                    <div className="bg-very-dark-cyan rounded-xl pt-10 pb-6 px-6 md:px-10 space-y-8 h-full flex flex-col justify-between">
                                        <div className="space-y-6">
                                            <Result
                                                title="Tip Amount"
                                                subtitle="person"
                                                result={perTip}
                                            />
                                            <Result
                                                title="Total"
                                                subtitle="person"
                                                result={perTotal}
                                            />
                                        </div>
                                        <button
                                            type="reset"
                                            className="py-3 block w-full text-center font-bold text-xl uppercase rounded-lg bg-strong-cyan hover:bg-opacity-90 text-very-dark-cyan"
                                        >
                                            reset
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default App;
