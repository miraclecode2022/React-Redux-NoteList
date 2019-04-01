import * as types from '../constants/ActionTypes'

const nameInitialState = false

export const displayForm = (state = nameInitialState, action) => {
    switch (action.type) {
        case types.TOGGLE_FORM:
            return !state
        case types.OPEN_FORM:
            return state=true
        case types.CLOSE_FORM:
            return state=false
        default:
            return state
    }
}

export default displayForm;