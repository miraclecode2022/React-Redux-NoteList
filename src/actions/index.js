import * as types from './../constants/ActionTypes'

export const ShowListNotes = () => {
    return {
        type : types.LIST_ALL
    }
}

export const onSaveNote = (note) => {
    return {
        type : types.SAVE_NOTE,
        note
    }
}

export const ToggleForm = () => {
    return {
        type : types.TOGGLE_FORM
    }
}

export const CloseForm = () => {
    return {
        type : types.CLOSE_FORM
    }
}

export const OpenForm = () => {
    return {
        type : types.OPEN_FORM
    }
}

export const UpdateStatus = (id) => {
    return {
        type : types.UPDATE_STATUS_NOTE,
        id // id : id
    }
}

export const DeleteNote = (id) => {
    return {
        type : types.DELETE_NOTE,
        id
    }
}

export const UpdateNote = (notes) => {
    return {
        type : types.UPDATE_ITEM,
        notes
    }
}

export const FilterNote = (filter) => {
    return {
        type : types.FILTER_TABLE,
        filter
    }
}

export const SearchNote = (keyword) => {
    return {
        type : types.SEARCH,
        keyword
    }
}

export const SortNote = (sort) => {
    return {
        type : types.SORT,
        sort
    }
}