import React, { Component } from 'react';
import './App.css';
import NoteForm from './component/NoteForm';
import NoteControl from './component/NoteControl';
import NoteList from './component/NoteList';
import {connect} from 'react-redux'
import * as actions from './actions/index'

class App extends Component {

  toggleForm = () =>{
    if(this.props.updateNote && this.props.updateNote != null){
      this.props.onOpenForm();
    }else {
      this.props.onToggleForm();
    }
    this.props.onClearNote({
      id : '',
      title : '',
      desc : '',
      status : false,
    })
  }

  render() {
    var { isDislayForm} = this.props
    return (
      <div className="container">
      <div className="text-center">
        <h1>Quản Lý Ghi Chú</h1>
        <hr />
      </div>
      <div className="row">
          <NoteForm/>
        <div className={isDislayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button type="button" className="btn btn-primary" onClick={this.toggleForm}>
            <span className="fa fa-plus mr-2" /> Thêm Ghi Chú
           </button>
          <NoteControl 
          onSort={this.onSort}
          />
          <NoteList />
        </div>
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isDislayForm: state.displayForm,
    updateNote : state.updateNote
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onToggleForm: () => {
      dispatch(actions.ToggleForm())
    },
    onClearNote: (note) => {
      dispatch(actions.UpdateNote(note))
    },
    onOpenForm: () => {
      dispatch(actions.OpenForm());
    },
    onCloseForm: () => {
      dispatch(actions.CloseForm());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
