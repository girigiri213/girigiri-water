import React, { Component } from 'react'
import DeleteConfirm from './DeleteConfirm'
import { DASHBOARD_CLIENT } from '../const/dashboard'

class FormClientView extends Component {
  constructor(props, context) {
    super(props, context)
    this.isRender = false
  }


  setValue() {
    if (this.props.data !== null ) {
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
    else {
      this.refs.IDcard.value = null
      this.refs.deliverDeviceDate.valueAsDate = null
      this.refs.clientKind.value = null
      this.refs.companyName.value = null
      this.refs.telephone.value = null
      this.refs.mobilephone.value = null
      this.refs.address.value = null
      this.refs.zipCode.value = null
      this.refs.contacts.value = null
      this.refs.email.value = null
    }
  }

  handleSubmit() {
    let data = {
      userId: this.refs.IDcard.value,
      type: this.refs.clientKind.value,
      companyName: this.refs.companyName.value,
      phone: this.refs.telephone.value,
      mobile: this.refs.mobilephone.value,
      address: this.refs.address.value,
      zip: this.refs.zipCode.value,
      contactName: this.refs.contacts.value,
      email: this.refs.email.value
    }
    Object.keys(data).map(function(key) {
      if (data[key] === "") {
        data[key] = null
      }
    })
    console.log(data)
    if (this.props.itemID === 0) {
      this.props.onCreate(DASHBOARD_CLIENT, data)
    }
    else {
      this.props.onUpdate(DASHBOARD_CLIENT, this.props.itemID, data)
    }
  }

  componentDidMount() {
    $('#form-client').validate({
      rules: {
        IDcard: {
          minlength: 18,
          maxlength: 18,
          required: true
        },
        telephone: {
          minlength: 8,
          maxlength: 12,
          required: false
        },
        mobilephone: {
          minlength: 11,
          maxlength: 11,
          required: true
        },
        address: {
          required: true
        },
        zipCode: {
          minlength: 6,
          maxlength: 6,
          required: false
        },
        contacts: {
          required: true
        },
        email: {
          email: true,
          required: false
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
    <div className="modal fade" id="clientForm" tabIndex="-1" role="dialog" aria-labelledby="clientFormLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="modal-title" id="myModalLabel">客户信息</h4>
          </div>
          <form id="form-client">
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="IDcard">
                身份证编号
                <span style={{color: "red"}}>{"*"}</span>
              </label>
              <input type="text" className="form-control" id="IDcard" name="IDcard" ref="IDcard" placeholder="Enter ID number" required/>
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
              <input type="text" className="form-control" id="telephone" name="telephone" placeholder="Enter telephone number" ref="telephone"/>
            </div>
            <div className="form-group">
              <label htmlFor="mobilephone">移动电话<span style={{color: "red"}}>{"*"}</span></label>
              <input type="text" className="form-control" id="mobilephone" name="mobilephone" placeholder="Enter mobilephone number" ref="mobilephone" required/>
            </div>
            <div className="form-group">
              <label htmlFor="address">客户地址<span style={{color: "red"}}>{"*"}</span></label>
              <input type="text" className="form-control" id="address" name="address" placeholder="Enter client's address" ref="address" required/>
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">邮编</label>
              <input type="text" className="form-control" id="zipCode" name="zipCode" placeholder="Enter zip code" ref="zipCode"/>
            </div>
            <div className="form-group">
              <label htmlFor="contacts">联系人<span style={{color: "red"}}>{"*"}</span></label>
              <input type="text" className="form-control" id="contacts" name="contacts" placeholder="Enter contacts" ref="contacts" required/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" id="email" name="email" placeholder="Enter email address" ref="email"/>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger pull-left" data-toggle="modal" data-dismiss="modal" data-target="#deleteConfirm">删除</button>
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
      dashboard={DASHBOARD_CLIENT}
    />
  </div>
    )
  }
}

export default FormClientView
