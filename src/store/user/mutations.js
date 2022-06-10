
const mutations = {
    SET_STATE (state, listValue = []) {
        let box
        let attribute
        let value
        switch (listValue.length) {
            case 2:
                [box, value] = listValue
                state[box] = value
                break;
            case 3: 
                [box, attribute, value] = listValue
                state[box][attribute] = value 
                break;
            default:
                break;
        }
    },
    // SET_SUBMIT_STATUS (state, value) {
    //     state.submitStatus = value
    // },
    SET_NAME_STATUS (state, value) {
        state.name = value
    },
    SET_EMAIL_STATUS (state, value) {
        state.email = value
    }, 
    SET_PHONE_STATUS (state, value) {
        state.phone = value
    },
    SET_FEEDBACK_STATUS (state, value) {
        state.feedback = value
    },
}

export default mutations