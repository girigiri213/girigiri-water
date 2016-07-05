import React, { PropTypes, Component } from 'react'

import {
  DASHBOARD_CLIENT,
  DASHBOARD_COM_STORE,
  DASHBOARD_COM_TURNOVER,
  DASHBOARD_REPAIR,
  DASHBOARD_REPORT,
  DASHBOARD_WELCOME
} from '../const/dashboard'

class SearchField extends Component {
  constructor(props, context) {
    super(props, context)
  }
  handleSearch() {
    let params
    switch (this.props.dashboard) {
      case DASHBOARD_CLIENT:
        // items = [{text: "身份证编号", ref: "userId"}, {text: "　移动电话", ref: "mobile"}, {text: "　　联系人", ref: "contactName"}]
        params = {
          userId: this.refs.userId.value,
          mobile: this.refs.mobile.value,
          contactName: this.refs.contactName.value,
          low: 0,
          high: Date.now()
        }
        break
      case DASHBOARD_REPORT:
        // items = [{text: "客户编号", ref: "cusId"}]
        params = {
          cusId: this.refs.cusId.value,
          low: 0,
          high: Date.now()
        }
        break
      case DASHBOARD_REPAIR:
        // items = [{text: "　工程师", ref: "engineer"}]
        params = {
          engineer: this.refs.engineer.value,
          low: 0,
          high: Date.now()
        }
        break
      case DASHBOARD_COM_STORE:
        // items = [{text: "备件名称", ref: "name"}]
        params = {
          name: this.refs.name.value
        }
        break
      case DASHBOARD_COM_TURNOVER:
        // items = [{text: "备件名称", ref: "name"}]
        params = {
          name: this.refs.name.value,
          low: 0,
          high: Date.now()
        }
    }
    if (params.low !== undefined) {
      if (this.refs.low.valueAsDate !== null) {
        params.low = this.refs.low.valueAsDate.getTime()
      }
      if (this.refs.high.valueAsDate !== null) {
        params.high = this.refs.high.valueAsDate.getTime()
      }
    }
    this.props.submitSearch(this.props.dashboard, params)
  }

  componentDidMount() {
    $('#form-search0').validate({
      rules: {
        userId: {
          number: true
        },
        mobile: {
          number: true
        },
        cusId: {
          number: true
        }
      },
      highlight: function (element) {
        $(element).closest('.form-group').removeClass('has-success').addClass('has-error')
      },
      success: function (element) {
        element.closest('.form-group').removeClass('has-error').addClass('has-success')
      }
    })
    $('#form-search1').validate({
      rules: {
        mobile: {
          number: true
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
    let items = []
    switch (this.props.dashboard) {
      case DASHBOARD_CLIENT:
        items = [{text: "身份证编号", ref: "userId"}, {text: "　移动电话", ref: "mobile"}, {text: "　　联系人", ref: "contactName"}]
        break
      case DASHBOARD_REPORT:
        items = [{text: "客户编号", ref: "cusId"}]
        break
      case DASHBOARD_REPAIR:
        items = [{text: "　工程师", ref: "engineer"}]
        break
      case DASHBOARD_COM_STORE:
        items = [{text: "备件名称", ref: "name"}]
        break
      case DASHBOARD_COM_TURNOVER:
        items = [{text: "备件名称", ref: "name"}]
    }
    console.log(this.props.dashboard)
    console.log(items)
    let shows = []
    items.forEach((item, idx) => {
      shows.push(
          <form className="form-inline" id={"form-search"+idx}>
            <div className="form-group">
              <label htmlFor={item.ref}>{item.text + "："}</label>
              <input type="text" className="form-control" ref={item.ref} id={item.ref} name={item.ref} placeholder="Search..." />
            </div>
          </form>
      )
    })
    if (this.props.dashboard !== DASHBOARD_COM_STORE) {
      shows.push(
        <div className="row">
          <form className="form-inline">
            <div className="form-group col-lg-4 col-sm-4">
              <label htmlFor="timeText">{"时间：从"}</label>
              <input type="date" className="form-control" id="timeText" ref="low"/>
            </div>
            <div className="form-group col-lg-4 col-sm-4">
              <label htmlFor="timeText">{"至"}</label>
              <input type="date" className="form-control" id="timeText" ref="high"/>
            </div>
          </form>
        </div>
      )
    }
    return (
      <div>
        {shows}
        <button className="btn btn-primary" onClick={() => this.handleSearch()}>搜索</button>
      </div>
    )
  }
}

export default SearchField
