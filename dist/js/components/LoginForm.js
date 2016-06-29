import React, { Component } from 'react'

// const LoginForm = ({ onSubmit }) => (
//   <div className="container">
//     <div className="row">
//         <div className="col-md-4 col-md-offset-4">
//             <div className="login-panel panel panel-default">
//                 <div className="panel-heading">
//                     <h3 className="panel-title">Please Sign In</h3>
//                 </div>
//                 <div className="panel-body">
//                     <form role="form">
//                         <fieldset>
//                             <div className="form-group">
//                                 <input className="form-control" placeholder="E-mail" name="email" type="email" autofocus />
//                             </div>
//                             <div className="form-group">
//                                 <input className="form-control" placeholder="Password" name="password" type="password" value="" />
//                             </div>
//                             <div className="checkbox">
//                                 <label>
//                                     <input name="remember" type="checkbox" value="Remember Me" />Remember Me
//                                 </label>
//                             </div>
//                             <a href="#" className="btn btn-lg btn-success btn-block" onClick={() => onSubmit(username, password)}>Login</a>
//                         </fieldset>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </div>
//   </div>
// )

class LoginForm extends Component {
  constructor(props, context) {
    super(props, context)
  }

  handleSubmit() {
    this.props.onSubmit(this.usernameInput.value, this.passwordInput.value)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-4 col-md-offset-4">
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Please Sign In</h3>
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
                                <div className="checkbox">
                                    <label>
                                        <input name="remember" type="checkbox" value="Remember Me" />Remember Me
                                    </label>
                                </div>
                                <a href="#" className="btn btn-lg btn-success btn-block" onClick={(e) => this.handleSubmit()}>Login</a>
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
