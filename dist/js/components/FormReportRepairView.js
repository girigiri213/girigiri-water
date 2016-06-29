import React from 'react'
import DeleteConfirm from './DeleteConfirm'

const FormReportRepairView = () => (
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
          <form>
          <div className="modal-body">
            <div className="form-group col-md-6">
              <label htmlFor="reportID">报修编号</label>
              <input type="text" className="form-control" id="reportID" placeholder="Automatic report ID" disabled />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="reportClient">报修客户</label>
              <select className="form-control" id="reportClient" >
                <option>客户1 编号：001</option>
                <option>客户2 编号：002</option>
                <option>客户3 编号：003</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="reportDate">报修时间</label>
              <input type="date" className="form-control" id="reportDate" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="estimatedPrice">预估价格</label>
              <input type="text" className="form-control" id="estimatedPrice" placeholder="Enter estimated price"/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="finishDate">预估完成时间</label>
              <input type="date" className="form-control" id="finishDate" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="reportState">报修状态</label>
              <select className="form-control" id="reportState" >
                <option>进行中</option>
                <option>结束</option>
                <option>撤销</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="deviceType">产品类型<span style={{color: "red"}}>{"*"}</span></label>
              <select className="form-control" id="deviceType" required>
                <option>台式机</option>
                <option>笔记本</option>
                <option>投影仪</option>
                <option>打印机</option>
                <option>其他</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="deviceBrand">机器品牌</label>
              <input type="text" className="form-control" id="deviceBrand" placeholder="Enter Device Brand"/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="deviceModel">机器型号</label>
              <input type="text" className="form-control" id="deviceModel" placeholder="Enter Device Model"/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="serialNumber">系列号</label>
              <input type="text" className="form-control" id="serialNumber" placeholder="Enter serial number"/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="missingParts">缺少零件</label>
              <input type="text" className="form-control" id="missingParts" placeholder="Enter missing parts"/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="symptom">故障现象<span style={{color: "red"}}>{"*"}</span></label>
              <input type="text" className="form-control" id="symptom" placeholder="Enter symptom" required/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="faultType">产品类型<span style={{color: "red"}}>{"*"}</span></label>
              <select className="form-control" id="faultType" required>
                <option>固定性故障</option>
                <option>间歇性故障</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="appearenceCheck">机器外观检查</label>
              <input type="text" className="form-control" id="appearenceCheck" placeholder="Enter appearence state"/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="passwd">开机口令</label>
              <input type="text" className="form-control" id="passwd" placeholder="Enter device's password"/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="vitalInfo">重要资料</label>
              <input type="text" className="form-control" id="vitalInfo" placeholder="Enter important files"/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="hdd">HDD</label>
              <input type="text" className="form-control" id="hdd" placeholder="Enter if any hdd"/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="memory">内存</label>
              <input type="text" className="form-control" id="memory" placeholder="Enter if any memory"/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="pcCard">外置PC卡</label>
              <input type="text" className="form-control" id="pcCard" placeholder="Enter if any external PC card"/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="acAdapter">AC适配器</label>
              <input type="text" className="form-control" id="acAdapter" placeholder="Enter if any AC adapter"/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="battery">电池</label>
              <input type="text" className="form-control" id="battery" placeholder="Enter if any bettery"/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="cdrom">外接光驱</label>
              <input type="text" className="form-control" id="cdrom" placeholder="Enter if any CD-ROM"/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="otherInfo">其他</label>
              <input type="text" className="form-control" id="otherInfo" placeholder="Enter if any other Infomation"/>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-danger pull-left" data-toggle="modal" data-target="#deleteConfirm">Delete</button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-primary">Save changes</button>
          </div>
          </form>
        </div>
      </div>
    </div>
    <DeleteConfirm />
  </div>
)

export default FormReportRepairView
