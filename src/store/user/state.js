import { deepFreeze } from "~/ulits/function";

const initialState = () => ({
    submitStatus: null,
    name: '',
    email: '',
    phone: '',
    feedback: '',
    option: null,
})

export default deepFreeze(initialState)