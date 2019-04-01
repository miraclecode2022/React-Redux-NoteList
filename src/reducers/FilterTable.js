import * as types from './../constants/ActionTypes'

const nameInitialState = {
    title : '',
    desc : '',
    status : -1
}

const FilterTable = (state = nameInitialState, action) => {
    switch (action.type) {
        case types.FILTER_TABLE:
            action.filter.status = parseInt(action.filter.status,10)
            return action.filter
        default:
            return state
    }
}

export default FilterTable