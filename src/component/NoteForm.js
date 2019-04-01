import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from './../actions/index'

class NoteForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id : '',
        title : '',
        desc : '',
        status : false
      }
    }
    // componentWullMount chỉ chạy khi form này chưa đc hiển thị , còn khi hiển thị rồi thì sẽ k gọi nữa
    componentWillMount() {
      if(this.props.noteEdit && this.props.noteEdit != null){
        this.setState({
          id : this.props.updateNote.id,
          title : this.props.updateNote.title,  
          desc : this.props.updateNote.desc,
          status : this.props.updateNote.status
        })
      }else{
        this.onClear();
      }
    }
    
    componentWillReceiveProps(nextProps) {
      if(nextProps && nextProps.updateNote){
        this.setState({
          id : nextProps.updateNote.id,
          title : nextProps.updateNote.title,  
          desc : nextProps.updateNote.desc,
          status : nextProps.updateNote.status
        })
      }else{
        this.onClear();
      }
    }
    
    onChange = (event) => {
      var target = event.target;
      var name = target.name;
      var value = target.value;
      // sử lí kiểu status string thành pool
      if(name === 'status'){
        value = target.value === 'true' ? true : false
      }
      this.setState({
        [name] : value
      })
    }

    onSave= (event) => {
      event.preventDefault();
      this.props.onSaveNote(this.state)
      this.onClear();
      this.props.onCloseForm();
    }

    onClear = () => {
      this.setState({
        title : "",
        desc : "",
        status : false
      })
    }

    render() {
      console.log(typeof this.state.status);
      var {id} = this.state;
      var {isDisplayForm} = this.props;
        return (
          isDisplayForm === false ? '' :
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="card">
              <div className={id !== "" ? "card-header bg-warning" : "card-header bg-info"}>
                {id !== "" ? "Sửa Ghi Chú" : "Thêm Ghi Chú" }
                <span>
                  <i className="far fa-times-circle float-right mt-1 cursor-pointer" 
                  onClick={() => this.props.onCloseForm()}>
                  </i>
                  </span>
              </div>
              <div className="card-body">
                <form onSubmit={this.onSave}>
                  <div className="form-group">
                    <label>Tiêu đề :</label>
                    <input type="text" 
                    className="form-control" 
                    name="title" 
                    value={this.state.title}
                    onChange={(event) => this.onChange(event)}
                     />
                  </div>
                  <div className="form-group">
                    <label>Nội dung :</label>
                    <textarea type="text" 
                    className="form-control" 
                    name="desc" 
                    value={this.state.desc} 
                    onChange={(event) => this.onChange(event)}
                    />
                  </div>
                  <label>Trạng Thái :</label>
                  <select className="form-control" 
                  required="required" 
                  name="status" 
                  value={this.state.status}
                  onChange={(event) => this.onChange(event)}
                  >
                    <option value={false}>Chưa Hoàn Thành</option>
                    <option value={true}>Hoàn Thành</option>
                  </select>
                  <br />
                  <div className="text-center">
                    {
                      id !== "" ?
                      <button type="submit" className="btn btn-warning mr-2"><i className="fas fa-edit mr-2"></i>
                        Sửa
                      </button>
                      :
                      <button type="submit" className="btn btn-success mr-2"><i className="fas fa-plus-square mr-2"></i>
                        Thêm
                      </button>
                    }
                    <button
                    type="button" 
                    className="btn btn-danger"
                    onClick={this.onClear}
                    > <i className="fas fa-minus-circle mr-2"></i>Hủy Bỏ</button>
                  </div>
                </form>
              </div>
            </div>
        </div>
        
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isDisplayForm: state.displayForm,
    updateNote : state.updateNote
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSaveNote: (note) => {
      dispatch(actions.onSaveNote(note));
    },
    onCloseForm: () => {
      dispatch(actions.CloseForm());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)
