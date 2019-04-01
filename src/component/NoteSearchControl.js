import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index'

class NoteSearchControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword : ''
    }
  }
  
  onChange = (event) => {
    var target = event.target
    var name = target.name
    var value = target.value
    this.setState({
      [name] : value
    })
  }
  onSearch = () => {
    this.props.onSearch(this.state.keyword)
  }
    render() {
        var {keyword} = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="input-group">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Nhập từ khóa...(Tìm theo tiêu đề)" 
                name="keyword"
                value={keyword}
                onChange={this.onChange} 
                />
                <span className="input-group-btn">
                  <button className="btn btn-primary" type="button" onClick={this.onSearch}>
                    <span className="fa fa-search mr-2" />Tìm
                  </button>
                </span>
              </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSearch: (keyword) => {
      dispatch(actions.SearchNote(keyword))
    }
  }
}

export default connect(null, mapDispatchToProps)(NoteSearchControl)