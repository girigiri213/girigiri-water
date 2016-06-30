import React from 'react'
import DeleteConfirm from './DeleteConfirm'

const FormRepairInfoView = () => (
  <div>
    <div className="modal fade" id="repairForm" tabIndex="-1" role="dialog" aria-labelledby="repairFormLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="modal-title" id="myModalLabel">维修信息</h4>
          </div>
          <form>
            <div className="modal-body">
              <div className="form-group col-md-6">
                <label htmlFor="reportID">报修编号</label>
                <input type="text" className="form-control" id="reportID" placeholder="Automatic report ID" disabled />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="serviceStaff">维修人员</label>
                <select className="form-control" id="serviceStaff" >
                  <option>工程师1号 当前2</option>
                  <option>工程师2号 当前0</option>
                  <option>工程师3号 当前4</option>
                  <option>工程师4号 当前3</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="dispatchDate">分配时间</label>
                <input type="date" className="form-control" id="dispatchDate" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="checkInfo">检测记录</label>
                <input type="text" className="form-control" id="checkInfo" placeholder="Enter check infomation"/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="repairInfo">检测记录</label>
                <input type="text" className="form-control" id="repairInfo" placeholder="Enter repair infomation"/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="repairDate">维修检测时间</label>
                <input type="date" className="form-control" id="repairDate" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="workload">工作量</label>
                <input type="text" className="form-control" id="workload" placeholder="Enter workload"/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="laborCosts">人工费</label>
                <input type="text" className="form-control" id="laborCosts" placeholder="Enter labor costs"/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="materailFee">材料费</label>
                <input type="text" className="form-control" id="materailFee" placeholder="Enter material fee"/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="reportPromise">报修承诺</label>
                <input type="text" className="form-control" id="reportPromise" placeholder="Enter report's promise"/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="noticeItems">注意事项</label>
                <input type="text" className="form-control" id="noticeItems" placeholder="Enter notice items"/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="repairState">维修状态</label>
                <select className="form-control" id="repairState" >
                  <option>未分配</option>
                  <option>已分配</option>
                  <option>已维修</option>
                  <option>撤销</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="delayState">维修延迟程度</label>
                <select className="form-control" id="delayState" >
                  <option>一般</option>
                  <option>比较严重</option>
                  <option>严重</option>
                </select>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-danger pull-left" id="myDelete" data-toggle="modal" data-target="#deleteConfirm">Delete</button>
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



export default FormRepairInfoView
