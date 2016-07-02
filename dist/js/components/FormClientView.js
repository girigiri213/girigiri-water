import React, { Component } from 'react'
import DeleteConfirm from './DeleteConfirm'

class FormClientView extends Component {
  constructor(props, context) {
    super(props, context)
    this.isRender = false
  }


  setValue() {
    console.log(this.props.data)
    if (this.props.data !== null ) {
      console.log(this.props.data.userId)
      this.refs.IDcard.value = this.props.data.userId
      this.refs.deliverDeviceDate.valueAsDate = new Date(this.props.data.created)
      this.refs.clientKind.value = this.props.data.type
      this.refs.companyName.value = this.props.data.companyName
      this.refs.telephone.value = this.props.data.phone
      this.refs.mobilephone.value = this.props.data.mobile
      this.refs.address.value = this.props.data.address
      this.refs.zipCode.value = this.props.data.zip
      this.refs.contacts.value = this.props.data.contactName
      this.refs.email.value = this.props.data.email
    }
  }

  render() {
    if (this.isRender === true) {
      this.setValue()
    }
    this.isRender = true

    return (
  <div>
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
              <input type="text" className="form-control" id="IDcard" ref="IDcard" placeholder="Enter ID number" required/>
            </div>
            <div className="form-group">
              <label htmlFor="deliverDeviceDate">客户送机时间</label>
              <input type="date" className="form-control" id="deliverDeviceDate" ref="deliverDeviceDate" />
            </div>
            <div className="form-group">
              <label htmlFor="clientKind">客户性质</label>
              <select className="form-control" id="clientKind" ref="clientKind">
                <option value="1">家庭用户</option>
                <option value="2">单位用户</option>
                <option value="3">代理商</option>
                <option value="4">签约用户</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="companyName">单位名称</label>
              <input type="text" className="form-control" id="companyName" placeholder="Enter company name" ref="companyName"/>
            </div>
            <div className="form-group">
              <label htmlFor="telephone">固话</label>
              <input type="text" className="form-control" id="telephone" placeholder="Enter telephone number" ref="telephone"/>
            </div>
            <div className="form-group">
              <label htmlFor="mobilephone">移动电话<span style={{color: "red"}}>{"*"}</span></label>
              <input type="text" className="form-control" id="mobilephone" placeholder="Enter mobilephone number" ref="mobilephone" required/>
            </div>
            <div className="form-group">
              <label htmlFor="address">客户地址<span style={{color: "red"}}>{"*"}</span></label>
              <input type="text" className="form-control" id="address" placeholder="Enter client's address" ref="address" required/>
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">邮编</label>
              <input type="text" className="form-control" id="zipCode" placeholder="Enter zip code" ref="zipCode"/>
            </div>
            <div className="form-group">
              <label htmlFor="contacts">联系人<span style={{color: "red"}}>{"*"}</span></label>
              <input type="text" className="form-control" id="contacts" placeholder="Enter contacts" ref="contacts" required/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" id="email" placeholder="Enter email address" ref="email"/>
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

export default FormClientView
