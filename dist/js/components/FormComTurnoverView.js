import React, { Component } from 'react'
import DeleteConfirm from './DeleteConfirm'

class FormComTurnoverView extends Component {
  constructor(props, context) {
    super(props, context)
    this.isRender = false
  }

  setValue() {
    if (this.props.data !== null) {
      // this.refs.reportID.value = this.props.data.
      this.refs.turnoverComName.value = this.props.data.name
      this.refs.turnoverComModel.value = this.props.data.serial
      this.refs.turnoverAmount.value = this.props.data.size
      this.refs.turnoverState.value = this.props.data.state
    }
    else {
      this.refs.turnoverComName.value = null
      this.refs.turnoverComModel.value = null
      this.refs.turnoverAmount.value = null
      this.refs.turnoverState.value = null
    }
  }

  render() {
    if (this.isRender === true) {
      this.setValue()
    }
    this.isRender = true
    return (
      <div>
        <div className="modal fade" id="comTurnoverForm" tabIndex="-1" role="dialog" aria-labelledby="comTurnoverFormLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title" id="myModalLabel">备件流水明细</h4>
              </div>
              <form>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="reportID">报修编号</label>
                  <input type="text" className="form-control" id="reportID" placeholder="Enter report ID" ref="reportID"/>
                </div>
                <div className="form-group">
                  <label htmlFor="turnoverComName">备件名称<span style={{color: "red"}}>{"*"}</span></label>
                  <input type="text" className="form-control" id="turnoverComName" placeholder="Enter component's name" ref="turnoverComName" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="turnoverComModel">型号</label>
                  <input type="text" className="form-control" id="turnoverComModel" placeholder="Enter component's model" ref="turnoverComModel"/>
                </div>
                <div className="form-group">
                  <label htmlFor="turnoverAmount">数量<span style={{color: "red"}}>{"*"}</span></label>
                  <input type="number" className="form-control" id="turnoverAmount" placeholder="Enter component's amount" ref="turnoverAmount" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="turnoverState">流水状态</label>
                  <select className="form-control" id="turnoverState" ref="turnoverState">
                    <option value="1">出库申请中</option>
                    <option value="2">已出库</option>
                    <option value="3">已入库</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger pull-left" data-toggle="modal" data-target="#deleteConfirm">Delete</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal">Save changes</button>
              </div>
              </form>
            </div>
          </div>
        </div>
        <DeleteConfirm />
      </div>
    )
  }
}

export default FormComTurnoverView
