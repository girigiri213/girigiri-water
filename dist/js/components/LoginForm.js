import React, { Component } from 'react'
import { Link } from 'react-router'

class LoginForm extends Component {
  constructor(props, context) {
    super(props, context)
  }

  handleSubmit(e) {
    this.props.onSubmit(this.usernameInput.value, this.passwordInput.value)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-4 col-md-offset-4">
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">请登录</h3>
                    </div>
                    <div className="panel-body">
                        <form role="form">
                            <fieldset>
                                <div className="form-group">
                                    <input className="form-control" ref={(ref) => this.usernameInput = ref} placeholder="E-mail" name="email" type="email" autofocus />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" ref={(ref) => this.passwordInput = ref} placeholder="Password" name="password" type="password" />
                                </div>
                                <a href="#" className="btn btn-lg btn-success btn-block" onClick={(e) => this.handleSubmit(e)}>登录</a>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
