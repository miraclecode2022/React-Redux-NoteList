import * as types from './../constants/ActionTypes'

const nameInitialState = {
    by : "name",
    value : 1 // 1 tăng; -1 giảm
}

const SortReducer = (state = nameInitialState, action) => {
    switch (action.type) {
        case types.SORT:
            return {
                by : action.sort.by,
                value : action.sort.value
            }
        default:
            return state
    }
}

export default SortReducer