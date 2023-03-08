import {INCREMENT, DECREMENT} from "./Type"

export const increment = () => {
    return {
        type: INCREMENT
    }
} 

export const decrement = () => {
    return {
        type: DECREMENT
    }
} 