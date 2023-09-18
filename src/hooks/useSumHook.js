import { useState } from "react"
import { useSnackbar } from 'notistack';
export const useSumHook = () => {
    const [value, setValue] = useState(0)

    const { enqueueSnackbar } = useSnackbar();

    const resetValue = () => {
        setValue(0)
        return value
    }

    const updateValue = (obj) => {

        if (obj.type == undefined || obj.type == null || obj.type == "") return enqueueSnackbar("Use a valid operator +,-,×,÷", { variant: 'error' })

        if (typeof (obj.amount) == "number") {
            switch (obj.type) {
                case "+":
                    setValue(value + obj.amount)
                    break;
                case "-":
                    setValue(value - obj.amount)
                    break;
                case "/":
                    setValue(value / obj.amount)
                    break;
                case "*":
                    setValue(value * obj.amount)
                    break;
                default:
                    break;
            }

            return value.toFixed(2)
        } else {
            enqueueSnackbar("Enter an amount", { variant: 'info' })

        }

    }

    return { value, updateValue, resetValue }

}