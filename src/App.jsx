import React, { useState } from "react";

import { ReactComponent as IconDollar } from "./images/icon-dollar.svg";
import { ReactComponent as IconPerson } from "./images/icon-person.svg";
import RadioButton from "./component/RadioButton.jsx";
import Label from "./component/Label.jsx";
import LabelInput from "./component/LabelInput.jsx";
import Textfield from "./component/Textfield.jsx";
import Result from "./component/Result.jsx";

// import Clsx from "./hooks/clsx.js";

function App() {
    const [radioValue, setRadioValue] = useState("");
    const [tip, setTip] = useState(0);
    const [total, setTotal] = useState(0);

    const radioBtn_selectTip = {
        name: "select-tip",
        radios: [
            {
                id: "selectTip-five",
                value: 5,
                text: "5%",
            },
            {
                id: "selectTip-ten",
                value: 10,
                text: "10%",
            },
            {
                id: "selectTip-fifteen",
                value: 15,
                text: "15%",
            },
            {
                id: "selectTip-twentyFive",
                value: 25,
                text: "25%",
            },
            {
                id: "selectTip-fifty",
                value: 50,
                text: "50%",
            },
        ],
    };

    function clearRadio() {
        setRadioValue("");
    }

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
                            <div className="-mx-6 flex flex-wrap space-y-8 md:space-y-0">
                                <form className="px-6 w-full lg:w-1/2 space-y-7">
                                    <Textfield
                                        inputId="Bill"
                                        label="Bill"
                                        placeholder="0"
                                        img={IconDollar}
                                        number
                                        trim
                                    />
                                    <div className="space-y-2">
                                        <Label>Select Tip %</Label>
                                        <div className="-mx-2 flex flex-wrap">
                                            {radioBtn_selectTip.radios.map(
                                                radio => {
                                                    return (
                                                        <div
                                                            key={`${radioBtn_selectTip.name}-${radio.id}`}
                                                            className="px-2 w-1/2 md:w-1/3 mb-3"
                                                        >
                                                            <RadioButton
                                                                inputId={
                                                                    radio.id
                                                                }
                                                                inputName={
                                                                    radioBtn_selectTip.name
                                                                }
                                                                inputValue={
                                                                    radio.value
                                                                }
                                                                text={
                                                                    radio.text
                                                                }
                                                                currentValue={
                                                                    radioValue
                                                                }
                                                                setValue={
                                                                    setRadioValue
                                                                }
                                                            />
                                                        </div>
                                                    );
                                                }
                                            )}
                                            <div className="px-2 w-1/2 md:w-1/3 mb-3">
                                                <LabelInput
                                                    inputId="selectTip-custom"
                                                    placeholder="Custom"
                                                    clearRadio={clearRadio}
                                                    number
                                                    trim
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <Textfield
                                        inputId="numberOfPeople"
                                        label="Number of People"
                                        placeholder="0"
                                        img={IconPerson}
                                        number
                                        trim
                                    />
                                </form>
                                <div className="px-6 w-full lg:w-1/2">
                                    <div className="bg-very-dark-cyan rounded-xl pt-10 pb-6 px-6 md:px-10 space-y-8 h-full flex flex-col justify-between">
                                        <div className="space-y-6">
                                            <Result
                                                title="Tip Amount"
                                                subtitle="person"
                                                result={tip}
                                            />
                                            <Result
                                                title="Total"
                                                subtitle="person"
                                                result={total}
                                            />
                                        </div>
                                        <button className="py-3 block w-full text-center font-bold text-xl uppercase rounded-lg bg-strong-cyan hover:bg-opacity-90 text-very-dark-cyan">
                                            reset
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default App;
