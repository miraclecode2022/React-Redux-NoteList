import { combineReducers } from 'redux'
import notes from './/NotesReducer'
import displayForm from './DisplayReducer'
import updateNote from './UpdateNoteReducer'
import filterTable from './FilterTable'
import search from './SearchReducer'
import sort from './SortReducer'

const myReducer = combineReducers({
    notes, // notes : notes
    displayForm,
    updateNote,
    filterTable,
    search,
    sort
});

export default myReducer;