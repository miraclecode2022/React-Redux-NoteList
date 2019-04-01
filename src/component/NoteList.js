import React, { Component } from 'react';
import NoteItem from './NoteItem'
import {connect} from 'react-redux'
import * as actions from './../actions/index'
class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterTitle : "",
      filterDesc : "",
      filterStatus : -1 // Tất là là -1. hoàn thành 1 , chưa hoàn thành 0
    }
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    var filter = {
      title : name === "filterTitle" ? value : this.state.filterTitle,
      desc : name === "filterDesc" ? value : this.state.filterDesc,
      status : name === "filterStatus" ? value : this.state.filterStatus
    };
    this.props.onFilter(filter)
    this.setState({
      [name] : value
    })
  }
  
    render() {
        var {notes, filterTable, keyword, sort} = this.props // tương đương var notes = this.props.notes
        // Filter Table lọc danh sách
        if(filterTable){
          if(filterTable.title){
            notes = notes.filter((notes) => {
              return notes.title.toLowerCase().indexOf(filterTable.title.toLocaleLowerCase()) !== -1;
            })
          }
          if(filterTable.desc)
          {
            notes = notes.filter((notes) => {
              return notes.desc.toLowerCase().indexOf(filterTable.desc.toLocaleLowerCase()) !== -1;
            })
          }
          notes = notes.filter((notes) => {
            if(filterTable.status === -1){
              return notes
            }else {
              return notes.status === (filterTable.status === 1 ? true : false)
            }
          })
        }
        // Search có nút bấm
        if(keyword){
          notes = notes.filter((notes) => {
            return notes.title.toLowerCase().indexOf(keyword.toLocaleLowerCase()) !== -1;
          })
        }
        // Sắp xếp
        if(sort.by === 'name'){
          notes.sort((a,b) => {
            if(a.title > b.title) return sort.value;
            else if(a.title < b.title) return -sort.value;
            else return 0;
          })
        } else {
            notes.sort((a,b) => {
              if(a.status > b.status) return -sort.value;
              else if(a.status < b.status) return sort.value;
              else return 0;
            })
        }

        var { filterTitle, filterDesc, filterStatus } = this.state
        var elementNote = notes.map((notes, index) => {
            return <NoteItem
                key={notes.id}
                index={index}
                notes={notes}
            />
        });
        
        return (
            <div className="row mt-3">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th className="text-center">STT</th>
                          <th className="text-center">Tiêu đề</th>
                          <th className="text-center">Nội dung</th>
                          <th className="text-center">Trạng Thái</th>
                          <th className="text-center">Hành Động</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td />
                          <td>
                            <input 
                            type="text" 
                            className="form-control" 
                            name="filterTitle" 
                            placeholder="...Nhập tiêu đề cần tìm"
                            value={filterTitle}
                            onChange={this.onChange}
                            />
                          </td>
                          <td>
                          <input 
                            type="text" 
                            className="form-control" 
                            name="filterDesc" 
                            placeholder="...Nhập nội dung cần tìm"
                            value={filterDesc}
                            onChange={this.onChange}
                            />
                          </td>
                          <td>
                            <select className="form-control" name="filterStatus" value={filterStatus} onChange={this.onChange}>
                              <option value={-1}>Tất Cả</option>
                              <option value={0}>Chưa Hoàn Thành</option>
                              <option value={1}>Hoàn Thành</option>
                            </select>
                          </td>
                          <td />
                        </tr>
                            { elementNote }
                        </tbody>
                    </table>
                  </div>
                </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.notes,
    filterTable : state.filterTable,
    keyword : state.search,
    sort : state.sort
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFilter: (filter) => {
      dispatch(actions.FilterNote(filter))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NoteList)