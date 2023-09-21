import React from "react"
import DropDown from "./DropDown";

const OPTIONS = [
    {
        label : "Apple",
        value : "APPLE"
    },
    {
        label : "Banana",
        value : "BANANA"
    },
    {
        label : "Orange",
        value : "ORANGE"
    },
    {
        label : "Grapes",
        value : "GRAPES"
    },
    {
        label : "Pineapple",
        value : "PINEAPPLE"
    }
]

const Question2 = () => {

    // Just a helper function that will be executed by the dropdown component in case the value changes
    const onChange = (values) => {
        console.log(values)
    }

    return <DropDown onChange={onChange} options={OPTIONS} />;

}

export default Question2;