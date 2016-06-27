import React from 'react'

const FormComponentView = () => (
  <div className="modal fade" id="componentForm" tabIndex="-1" role="dialog" aria-labelledby="componentFormLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 className="modal-title" id="myModalLabel">备件信息</h4>
        </div>
        <form>
        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="comName">备件名称<span style={{color: "red"}}>{"*"}</span></label>
            <input type="text" className="form-control" id="comName" placeholder="Enter component's name" required/>
          </div>
          <div className="form-group">
            <label htmlFor="comModel">型号</label>
            <input type="text" className="form-control" id="comModel" placeholder="Enter component's model"/>
          </div>
          <div className="form-group">
            <label htmlFor="unitPrice">单价<span style={{color: "red"}}>{"*"}</span></label>
            <input type="text" className="form-control" id="unitPrice" placeholder="Enter component's unit price" required/>
          </div>
          <div className="form-group">
            <label htmlFor="amount">数量<span style={{color: "red"}}>{"*"}</span></label>
            <input type="number" className="form-control" id="amount" placeholder="Enter component's amount" required/>
          </div>
          <div className="form-group">
            <label htmlFor="alertAmount">警戒数量<span style={{color: "red"}}>{"*"}</span></label>
            <input type="number" className="form-control" id="alertAmount" placeholder="Enter component's alert amount" required/>
          </div>
          <div className="form-group">
            <label htmlFor="storeState">库存状态</label>
            <select className="form-control" id="storeState" disabled>
              <option>正常</option>
              <option>临界</option>
              <option>警示</option>
              <option>缺货</option>
            </select>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="submit" className="btn btn-primary">Save changes</button>
        </div>
        </form>
      </div>
    </div>
  </div>
)

export default FormComponentView
