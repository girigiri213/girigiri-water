import React, { Component } from 'react'
import DeleteConfirm from './DeleteConfirm'
import { DASHBOARD_COM_STORE } from '../const/dashboard'

class FormComponentView extends Component {
  constructor(props, context) {
    super(props, context)
    this.isRender = false
  }

  setValue() {
    if (this.props.data !== null) {
      this.refs.comName.value = this.props.data.name
      this.refs.comModel.value = this.props.data.serial
      this.refs.unitPrice.value = this.props.data.price
      this.refs.amount.value = this.props.data.size
      this.refs.alertAmount.value = this.props.data.warningSize
      this.refs.storeState.value = this.props.data.state
    }
    else {
      this.refs.comName.value = null
      this.refs.comModel.value = null
      this.refs.unitPrice.value = null
      this.refs.amount.value = null
      this.refs.alertAmount.value = null
      this.refs.storeState.value = null
    }
  }

  handleSubmit() {
    let data = {
      name: this.refs.comName.value,
      serial: this.refs.comModel.value,
      price: this.refs.unitPrice.value,
      size: this.refs.amount.value,
      warningSize: this.refs.alertAmount.value,
    }
    Object.keys(data).map(function(key) {
      if (data[key] === "") {
        data[key] = null
      }
    })
    console.log(data)
    if (this.props.itemID === 0) {
      this.props.onCreate(DASHBOARD_COM_STORE, data)
    }
    else {
      this.props.onUpdate(DASHBOARD_COM_STORE, this.props.itemID, data)
    }
  }

  componentDidMount() {
    $('#form-component').validate({
      rules: {
        comName: {
          minlength: 2,
          required: true
        },
        unitPrice: {
          range: [1, 99999],
          required: true
        },
        amount: {
          range: [0, 999],
          required: true
        },
        alertAmount: {
          range: [1, 999],
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
      <div className="modal fade" id="componentForm" tabIndex="-1" role="dialog" aria-labelledby="componentFormLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title" id="myModalLabel">备件信息</h4>
            </div>
            <form id="form-component">
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="comName">备件名称<span style={{color: "red"}}>{"*"}</span></label>
                <input type="text" className="form-control" id="comName" name="comName" placeholder="Enter component's name" ref="comName" required/>
              </div>
              <div className="form-group">
                <label htmlFor="comModel">型号</label>
                <input type="text" className="form-control" id="comModel" placeholder="Enter component's model" ref="comModel"/>
              </div>
              <div className="form-group">
                <label htmlFor="unitPrice">单价<span style={{color: "red"}}>{"*"}</span></label>
                <input type="text" className="form-control" id="unitPrice" name="unitPrice" placeholder="Enter component's unit price" ref="unitPrice" required/>
              </div>
              <div className="form-group">
                <label htmlFor="amount">数量<span style={{color: "red"}}>{"*"}</span></label>
                <input type="number" className="form-control" id="amount" name="amount" placeholder="Enter component's amount" ref="amount" required/>
              </div>
              <div className="form-group">
                <label htmlFor="alertAmount">警戒数量<span style={{color: "red"}}>{"*"}</span></label>
                <input type="number" className="form-control" id="alertAmount" name="alertAmount" placeholder="Enter component's alert amount" ref="alertAmount" required/>
              </div>
              <div className="form-group">
                <label htmlFor="storeState">库存状态</label>
                <select className="form-control" id="storeState" ref="storeState" disabled>
                  <option value="1">正常</option>
                  <option value="2">临界</option>
                  <option value="3">警示</option>
                  <option value="4">缺货</option>
                </select>
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
        dashboard={DASHBOARD_COM_STORE}
      />
    </div>
    )
  }
}

export default FormComponentView
