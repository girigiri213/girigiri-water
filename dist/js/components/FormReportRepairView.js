import React, { Component } from 'react'
import DeleteConfirm from './DeleteConfirm'
import { getItemID } from './ListView'
import { DASHBOARD_REPORT } from '../const/dashboard'

class FormReportRepairView extends Component {
  constructor(props, context) {
    super(props, context)
    this.isRender = false
  }

  setValue() {
    if (this.props.clients !== null) {
      for(let i = this.refs.reportClient.options.length - 1 ; i >= 0 ; i--)
      {
        this.refs.reportClient.remove(i);
      }
      console.log("before:", this.refs.reportClient.options)
      console.log(this.props.clients)
      this.props.clients.forEach((client, idx) => {
        let option = document.createElement("option")
        option.value = getItemID(client)
        option.text = client.contactName + " 编号：" + getItemID(client)
        this.refs.reportClient.add(option)
        if (this.props.data !== null) {
          console.log(option.value, this.props.data.cusId, idx)
          if (option.value == this.props.data.cusId) {
            this.refs.reportClient.selectedIndex = idx
          }
        }
      })
      console.log("after:", this.refs.reportClient.options)
    }
    if (this.props.data !== null) {
      this.refs.reportID.value = getItemID(this.props.data)

      this.refs.reportDate.valueAsDate = new Date(this.props.data.created)
      this.refs.estimatedPrice.value = this.props.data.predictPrice
      this.refs.finishDate.value = this.props.data.predictTime
      this.refs.reportState.value = this.props.data.state
      this.refs.deviceType.value = this.props.data.device.type
      this.refs.deviceBrand.value = this.props.data.device.brand
      this.refs.deviceModel.value = this.props.data.device.number
      this.refs.serialNumber.value = this.props.data.device.serial
      this.refs.missingParts.value = this.props.data.device.components
      this.refs.symptom.value = this.props.data.device.error
      this.refs.faultType.value = this.props.data.device.errorType
      this.refs.appearanceCheck.value = this.props.data.device.appearance
      this.refs.passwd.value = this.props.data.device.pwd
      this.refs.vitalInfo.value = this.props.data.device.data
      this.refs.hdd.value = this.props.data.device.hdd
      this.refs.memory.value = this.props.data.device.memory
      this.refs.pcCard.value = this.props.data.device.pcoutside
      this.refs.acAdapter.value = this.props.data.device.adapter
      this.refs.battery.value = this.props.data.device.battery
      this.refs.cdrom.value = this.props.data.device.cdoutside
      this.refs.otherInfo.value = this.props.data.device.other
    }
    else {
      this.refs.reportDate.valueAsDate = null
      this.refs.estimatedPrice.value = null
      this.refs.finishDate.valueAsDate = null
      this.refs.reportState.value = null
      this.refs.deviceType.value = null
      this.refs.deviceBrand.value = null
      this.refs.deviceModel.value = null
      this.refs.serialNumber.value = null
      this.refs.missingParts.value = null
      this.refs.symptom.value = null
      this.refs.faultType.value = null
      this.refs.appearanceCheck.value = null
      this.refs.passwd.value = null
      this.refs.vitalInfo.value = null
      this.refs.hdd.value = null
      this.refs.memory.value = null
      this.refs.pcCard.value = null
      this.refs.acAdapter.value = null
      this.refs.battery.value = null
      this.refs.cdrom.value = null
      this.refs.otherInfo.value = null
    }
  }

  handleSubmit() {
    let data = {
      predictPrice: this.refs.estimatedPrice.value,
      predictTime: this.refs.finishDate.value,
      state: this.refs.reportState.value,
      cusId: this.refs.reportClient.value,
      device: {
        type: this.refs.deviceType.value,
        brand: this.refs.deviceBrand.value,
        number: this.refs.deviceModel.value,
        serial: this.refs.serialNumber.value,
        components: this.refs.missingParts.value,
        error: this.refs.symptom.value,
        errorType: this.refs.faultType.value,
        appearance: this.refs.appearanceCheck.value,
        pwd: this.refs.passwd.value,
        data: this.refs.vitalInfo.value,
        memory: this.refs.memory.value,
        adapter: this.refs.acAdapter.value,
        battery: this.refs.battery.value,
        other: this.refs.otherInfo.value,
        hdd: this.refs.hdd.value,
        pcoutside: this.refs.pcCard.value,
        cdoutside: this.refs.cdrom.value
      }
    }
    Object.keys(data).map(function(key) {
      if (data[key] === "") {
        data[key] = null
      }
    })
    console.log(data)
    if (this.props.itemID === 0) {
      this.props.onCreate(DASHBOARD_REPORT, data)
    }
    else {
      this.props.onUpdate(DASHBOARD_REPORT, this.props.itemID, data)
    }
  }

  componentDidMount() {
    $('#form-report-repair').validate({
      rules: {
        symptom: {
          minlength: 5,
          required: true
        }
      },
      highlight: function (element) {
        $(element).closest('.form-group').removeClass('has-success').addClass('has-error')
      },
      success: function (element) {
        element.closest('.form-group').removeClass('has-error').addClass('has-success')
      }
    })
  }

  render() {
    if (this.isRender === true) {
      this.setValue()
    }
    this.isRender = true

    return (
      <div>
        <div className="modal fade" id="reportForm" tabIndex="-1" role="dialog" aria-labelledby="reportFormLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title" id="myModalLabel">报修信息</h4>
              </div>
              <form id="form-report-repair">
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="reportID">报修编号</label>
                  <input type="text" className="form-control" id="reportID" placeholder="Automatic report ID" ref="reportID" disabled />
                </div>
                <div className="form-group">
                  <label htmlFor="reportClient">报修客户</label>
                  <select className="form-control" id="reportClient" ref="reportClient">
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="reportDate">报修时间</label>
                  <input type="date" className="form-control" id="reportDate" ref="reportDate"/>
                </div>
                <div className="form-group">
                  <label htmlFor="estimatedPrice">预估价格</label>
                  <input type="text" className="form-control" id="estimatedPrice" placeholder="Enter estimated price" ref="estimatedPrice"/>
                </div>
                <div className="form-group">
                  <label htmlFor="finishDate">预估完成时间</label>
                  <input type="date" className="form-control" id="finishDate" ref="finishDate"/>
                </div>
                <div className="form-group">
                  <label htmlFor="reportState">报修状态</label>
                  <select className="form-control" id="reportState" ref="reportState">
                    <option value="1">进行中</option>
                    <option value="2">结束</option>
                    <option value="3">撤销</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="deviceType">产品类型<span style={{color: "red"}}>{"*"}</span></label>
                  <select className="form-control" id="deviceType" ref="deviceType" required>
                    <option value="1">台式机</option>
                    <option value="2">笔记本</option>
                    <option value="3">投影仪</option>
                    <option value="4">打印机</option>
                    <option value="5">其他</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="deviceBrand">机器品牌</label>
                  <input type="text" className="form-control" id="deviceBrand" placeholder="Enter Device Brand" ref="deviceBrand"/>
                </div>
                <div className="form-group">
                  <label htmlFor="deviceModel">机器型号</label>
                  <input type="text" className="form-control" id="deviceModel" placeholder="Enter Device Model" ref="deviceModel"/>
                </div>
                <div className="form-group">
                  <label htmlFor="serialNumber">系列号</label>
                  <input type="text" className="form-control" id="serialNumber" placeholder="Enter serial number" ref="serialNumber"/>
                </div>
                <div className="form-group">
                  <label htmlFor="missingParts">缺少零件</label>
                  <input type="text" className="form-control" id="missingParts" placeholder="Enter missing parts" ref="missingParts"/>
                </div>
                <div className="form-group">
                  <label htmlFor="symptom">故障现象<span style={{color: "red"}}>{"*"}</span></label>
                  <input type="text" className="form-control" id="symptom" name="symptom" placeholder="Enter symptom" ref="symptom" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="faultType">故障类型<span style={{color: "red"}}>{"*"}</span></label>
                  <select className="form-control" id="faultType" ref="faultType" required>
                    <option value="1">固定性故障</option>
                    <option value="2">间歇性故障</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="appearanceCheck">机器外观检查</label>
                  <input type="text" className="form-control" id="appearanceCheck" placeholder="Enter appearance state" ref="appearanceCheck"/>
                </div>
                <div className="form-group">
                  <label htmlFor="passwd">开机口令</label>
                  <input type="text" className="form-control" id="passwd" placeholder="Enter device's password" ref="passwd"/>
                </div>
                <div className="form-group">
                  <label htmlFor="vitalInfo">重要资料</label>
                  <input type="text" className="form-control" id="vitalInfo" placeholder="Enter important files" ref="vitalInfo"/>
                </div>
                <div className="form-group">
                  <label htmlFor="hdd">HDD</label>
                  <input type="text" className="form-control" id="hdd" placeholder="Enter if any hdd" ref="hdd"/>
                </div>
                <div className="form-group">
                  <label htmlFor="memory">内存</label>
                  <input type="text" className="form-control" id="memory" placeholder="Enter if any memory" ref="memory"/>
                </div>
                <div className="form-group">
                  <label htmlFor="pcCard">外置PC卡</label>
                  <input type="text" className="form-control" id="pcCard" placeholder="Enter if any external PC card" ref="pcCard"/>
                </div>
                <div className="form-group">
                  <label htmlFor="acAdapter">AC适配器</label>
                  <input type="text" className="form-control" id="acAdapter" placeholder="Enter if any AC adapter" ref="acAdapter"/>
                </div>
                <div className="form-group">
                  <label htmlFor="battery">电池</label>
                  <input type="text" className="form-control" id="battery" placeholder="Enter if any bettery" ref="battery"/>
                </div>
                <div className="form-group">
                  <label htmlFor="cdrom">外接光驱</label>
                  <input type="text" className="form-control" id="cdrom" placeholder="Enter if any CD-ROM" ref="cdrom"/>
                </div>
                <div className="form-group">
                  <label htmlFor="otherInfo">其他</label>
                  <input type="text" className="form-control" id="otherInfo" placeholder="Enter if any other Infomation" ref="otherInfo"/>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-danger pull-left" data-toggle="modal" data-dismiss="modal" data-target="#deleteConfirm">删除</button>
                <a role="button" className="btn btn-warning pull-left" href={`/api/confirm/${this.props.itemID}`} download={`用户确认单-${this.props.itemID}`}>确认单</a>
                <a role="button" className="btn btn-warning pull-left" href={`/api/checkout/${this.props.itemID}`} download={`维修结算单-${this.props.itemID}`}>结算单</a>
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
          dashboard={DASHBOARD_REPORT}
        />
      </div>
    )
  }
}
export default FormReportRepairView
