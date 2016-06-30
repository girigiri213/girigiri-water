import React from 'react'
import DeleteConfirm from './DeleteConfirm'

const FormComTurnoverView = () => (
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
              <input type="text" className="form-control" id="reportID" placeholder="Enter report ID" />
            </div>
            <div className="form-group">
              <label htmlFor="turnoverComName">备件名称<span style={{color: "red"}}>{"*"}</span></label>
              <input type="text" className="form-control" id="turnoverComName" placeholder="Enter component's name" required/>
            </div>
            <div className="form-group">
              <label htmlFor="turnoverComModel">型号</label>
              <input type="text" className="form-control" id="turnoverComModel" placeholder="Enter component's model"/>
            </div>
            <div className="form-group">
              <label htmlFor="turnoverAmount">数量<span style={{color: "red"}}>{"*"}</span></label>
              <input type="number" className="form-control" id="turnoverAmount" placeholder="Enter component's amount" required/>
            </div>
            <div className="form-group">
              <label htmlFor="turnoverState">流水状态</label>
              <select className="form-control" id="turnoverState" >
                <option>出库申请中</option>
                <option>已出库</option>
                <option>已入库</option>
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

export default FormComTurnoverView
