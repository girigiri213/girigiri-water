import React from 'react'

const FormClientView = () => (
  <div className="modal fade" id="clientForm" tabIndex="-1" role="dialog" aria-labelledby="clientFormLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 className="modal-title" id="myModalLabel">客户信息</h4>
        </div>
        <form>
        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="IDcard">
              身份证编号
              <span style={{color: "red"}}>{"*"}</span>
            </label>
            <input type="text" className="form-control" id="IDcard" placeholder="Enter ID number" required/>
          </div>
          <div className="form-group">
            <label htmlFor="deliverDeviceDate">客户送机时间</label>
            <input type="date" className="form-control" id="deliverDeviceDate" />
          </div>
          <div className="form-group">
            <label htmlFor="clientKind">客户性质</label>
            <select className="form-control" id="clientKind" >
              <option>家庭用户</option>
              <option>单位用户</option>
              <option>代理商</option>
              <option>签约用户</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="companyName">单位名称</label>
            <input type="text" className="form-control" id="companyName" placeholder="Enter company name"/>
          </div>
          <div className="form-group">
            <label htmlFor="telephone">固话</label>
            <input type="text" className="form-control" id="telephone" placeholder="Enter telephone number"/>
          </div>
          <div className="form-group">
            <label htmlFor="mobilephone">移动电话<span style={{color: "red"}}>{"*"}</span></label>
            <input type="text" className="form-control" id="mobilephone" placeholder="Enter mobilephone number" required/>
          </div>
          <div className="form-group">
            <label htmlFor="address">客户地址<span style={{color: "red"}}>{"*"}</span></label>
            <input type="text" className="form-control" id="address" placeholder="Enter client's address" required/>
          </div>
          <div className="form-group">
            <label htmlFor="zipCode">邮编</label>
            <input type="text" className="form-control" id="zipCode" placeholder="Enter zip code"/>
          </div>
          <div className="form-group">
            <label htmlFor="contacts">联系人<span style={{color: "red"}}>{"*"}</span></label>
            <input type="text" className="form-control" id="contacts" placeholder="Enter contacts" required/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" className="form-control" id="email" placeholder="Enter email address"/>
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

export default FormClientView
