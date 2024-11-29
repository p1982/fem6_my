import React, {Component} from 'react'

class LoginForm extends Component{
    render(){
        return(
            <form>
            <div className="form-group">
              <input type="email" className="form-control" id="email1"placeholder="Your email address..."/>
            </div>
            <div class="form-group">
              <input type="password" className="form-control" id="password1" placeholder="Your password..."/>
            </div>
            <button type="button" className="btn btn-info btn-block btn-round">Login</button>
          </form>
        )
    }
}

export default LoginForm