import React, { Component } from 'react';
import * as actions from './../actions/index'
import {connect} from 'react-redux'

class NoteSortControl extends Component {
  
  onSort = (by, value) => {
    this.props.onSort({
        by : by,
        value : value
    });
  } 
    render() {
        var {sort} = this.props
        return (
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="dropdown cursor-pointer">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Sắp Xếp
            </button>
            <ul className="dropdown-menu text-center" aria-labelledby="dropdownMenu1">
              <li onClick={ () => this.onSort('name',1) }>
                <button className="btn btn-light btn-block">
                  <span className="fas fa-sort-alpha-down pr-2"></span>
                  <span className="pr-2">Tên A-Z</span>
                  {
                    (sort.by === 'name' && sort.value === 1 ? <span> <i className="fa fa-check"></i> </span> : '')
                  }
                  
                </button>
              </li>
              <li onClick={ () => this.onSort('name',-1) }>
                <button  className="btn btn-light btn-block">
                  <span className="fas fa-sort-alpha-up pr-2"></span>
                  <span>Tên Z-A</span>
                  {
                    (sort.by === 'name' && sort.value === -1 ? <span> <i className="fa fa-check"></i> </span> : '')
                  }
                </button>
              </li>
              <li role="separator" className="dropdown-divider" />
              <li onClick={ () => this.onSort('status',1) }>
                <button className="btn btn-light btn-block">Trạng Thái Hoàn Thành
                {
                    (sort.by === 'status' && sort.value === 1 ? <span> <i className="fa fa-check"></i> </span> : '')
                }
                </button>
              </li>
              <li onClick={ () => this.onSort('status',-1) }>
                <button className="btn btn-light btn-block">Trạng Thái Chưa Hoàn Thành
                {
                    (sort.by === 'status' && sort.value === -1 ? <span> <i className="fa fa-check"></i> </span> : '')
                }
                </button>
              </li>
            </ul>
          </div>
  </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    sort: state.sort
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSort: (sort) => {
      dispatch(actions.SortNote(sort))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteSortControl)