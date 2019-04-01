
import * as types from './../constants/ActionTypes'

const nameInitialState = ''

const SearchReducer = (state = nameInitialState, action) => {
    switch (action.type) {
        case types.SEARCH:
            return action.keyword
        default:
            return state
    }
}

export default SearchReducer