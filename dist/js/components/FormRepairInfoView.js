import React, { Component } from 'react'
import DeleteConfirm from './DeleteConfirm'
import { DASHBOARD_REPAIR } from '../const/dashboard'

class FormRepairInfoView extends Component {
  constructor(props, context) {
    super(props, context)
    this.isRender = false
  }

  setValue() {
    if (this.props.engineers !== null) {
      for(let i = this.refs.serviceStaff.options.length - 1 ; i >= 0 ; i--)
      {
        this.refs.serviceStaff.remove(i);
      }
      this.props.engineers.forEach(engineer => {
        let option = document.createElement("option")
        option.value = engineer.id
        option.text = engineer.name
        this.refs.serviceStaff.add(option)
      })
    }
    if (this.props.data !== null) {
      // this.refs.reportID.value = this.props.data.

      this.refs.dispatchDate.valueAsDate = new Date(this.props.data.created)
      this.refs.checkInfo.value = this.props.data.checkHistory
      this.refs.repairInfo.value = this.props.data.repairHistory
      this.refs.repairDate.valueAsDate = new Date(this.props.data.repairTime)
      this.refs.workload.value = this.props.data.workforce
      this.refs.laborCosts.value = this.props.data.manPrice
      this.refs.materialFee.value = this.props.data.materialPrice
      this.refs.repairPromise.value = this.props.data.promise
      this.refs.noticeItems.value = this.props.data.warning
      this.refs.repairState.value = this.props.data.repairState
      this.refs.delayState.value = this.props.data.delayType
    }
    else {
      this.refs.dispatchDate.valueAsDate = null
      this.refs.checkInfo.value = null
      this.refs.repairInfo.value = null
      this.refs.repairDate.valueAsDate = null
      this.refs.workload.value = null
      this.refs.laborCosts.value = null
      this.refs.materialFee.value = null
      this.refs.repairPromise.value = null
      this.refs.noticeItems.value = null
      this.refs.repairState.value = null
      this.refs.delayState.value = null
    }
  }

  handleSubmit() {
    let data = {
      managerId: this.refs.serviceStaff.value,
      checkHistory: this.refs.checkInfo.value,
      repairHistories: this.refs.repairInfo.value,
      repairTime: this.refs.repairDate.valueAsDate.getTime(),
      workforce: this.refs.workload.value,
      manPrice: this.refs.laborCosts.value,
      materialPrice: this.refs.materialFee.value,
      promise: this.refs.repairPromise.value,
      warning: this.refs.noticeItems.value,
      repairState: this.refs.repairState.value,
      delayType: this.refs.delayState.value
    }
    console.log(data.repairTime)
    Object.keys(data).map(function(key) {
      if (data[key] === "") {
        data[key] = null
      }
    })
    console.log(data)
    if (this.props.itemID === 0) {
      this.props.onCreate(DASHBOARD_REPAIR)
    }
    else {
      this.props.onUpdate(DASHBOARD_REPAIR, this.props.itemID, data)
    }
  }

  render() {
    if (this.isRender === true) {
      this.setValue()
    }
    this.isRender = true

    return (
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
                    <input type="text" className="form-control" id="reportID" placeholder="Automatic report ID" ref="reportID" disabled />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="serviceStaff">维修人员</label>
                    <select className="form-control" id="serviceStaff" ref="serviceStaff">
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="dispatchDate">分配时间</label>
                    <input type="date" className="form-control" id="dispatchDate" ref="dispatchDate"/>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="checkInfo">检测记录</label>
                    <input type="text" className="form-control" id="checkInfo" placeholder="Enter check infomation" ref="checkInfo"/>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="repairInfo">维修记录</label>
                    <input type="text" className="form-control" id="repairInfo" placeholder="Enter repair infomation" ref="repairInfo"/>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="repairDate">维修检测时间</label>
                    <input type="date" className="form-control" id="repairDate" ref="repairDate"/>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="workload">工作量</label>
                    <input type="text" className="form-control" id="workload" placeholder="Enter workload" ref="workload"/>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="laborCosts">人工费</label>
                    <input type="text" className="form-control" id="laborCosts" placeholder="Enter labor costs" ref="laborCosts"/>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="materialFee">材料费</label>
                    <input type="text" className="form-control" id="materialFee" placeholder="Enter material fee" ref="materialFee"/>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="reportPromise">报修承诺</label>
                    <input type="text" className="form-control" id="reportPromise" placeholder="Enter report's promise" ref="repairPromise"/>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="noticeItems">注意事项</label>
                    <input type="text" className="form-control" id="noticeItems" placeholder="Enter notice items" ref="noticeItems"/>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="repairState">维修状态</label>
                    <select className="form-control" id="repairState" ref="repairState">
                      <option value="1">未分配</option>
                      <option value="2">已分配</option>
                      <option value="3">已维修</option>
                      <option value="4">撤销</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="delayState">维修延迟程度</label>
                    <select className="form-control" id="delayState" ref="delayState">
                      <option value="1">一般</option>
                      <option value="2">比较严重</option>
                      <option value="3">严重</option>
                    </select>
                  </div>
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-danger pull-left" id="myDelete" data-toggle="modal" data-dismiss="modal" data-target="#deleteConfirm">删除</button>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">关闭</button>
                  <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={(e) => this.handleSubmit(e)}>保存</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <DeleteConfirm
          handleDelete={
            (dashboard, id) => {
              this.props.onDelete(dashboard, id)
            }
          }
          itemID={this.props.itemID}
          dashboard={DASHBOARD_REPAIR}
        />
      </div>
    )
  }
}

export default FormRepairInfoView
