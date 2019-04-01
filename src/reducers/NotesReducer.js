import * as types from '../constants/ActionTypes'

var s4 = () => {
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }
var randomId = () => {
    return s4() + s4() + s4() + '-' + s4() + s4() + '-' + s4()
  }
var  findIndex = (notes,id) => {
    var result = -1
    notes = notes.map((notes,index) => {
      if(notes.id === id)
      {
        result = index;
      }
      return result;
    })
    return result;
  }
// lấy dữ liệu
var data = JSON.parse(localStorage.getItem('notes'))
const nameInitialState = data ? data : []

export const notesReducer = (state = nameInitialState, action) => {
    var id = '';
    var index = -1
    switch (action.type) {
        case types.LIST_ALL:
            return state
        case types.SAVE_NOTE:
            var note = {
                id : action.note.id, // có thể ' ' or có giá trị
                title : action.note.title,
                desc : action.note.desc,
                status : action.note.status
            };
            if(!note.id){
              note.id = randomId();
              state.push(note);
            }else{
              index = findIndex(state, note.id);
              state[index] = note;
            }
            localStorage.setItem('notes', JSON.stringify(state))
            return [...state]
        case types.UPDATE_STATUS_NOTE:
            id = action.id
            index = findIndex(state,id)
            state[index] = {
                ...state[index],
                status : !state[index].status
            }
            localStorage.setItem('notes', JSON.stringify(state))
            return [...state]
        case types.DELETE_NOTE:
            id = action.id
            index = findIndex(state,id)
            if(index !== -1){
              state.splice(index,1)
              localStorage.setItem('notes', JSON.stringify(state))
            }
            return [...state]
        default:
            return state
    }
}

export default notesReducer