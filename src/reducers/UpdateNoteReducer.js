import * as types from './../constants/ActionTypes'

const nameInitialState = {
    id : "",
    title : "",
    desc : "",
    status : false
}

const UpdateNoteReducer = (state = nameInitialState, action) => {
    switch (action.type) {
        case types.UPDATE_ITEM:
            return action.notes
        default:
            return state
    }
}

export default UpdateNoteReducer