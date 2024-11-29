import React, {Component} from 'react'

class Modal extends Component{
    render(){
        return(
            <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header border-bottom-0">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <div className="form-title text-center">
          <h4>Login</h4>
        </div>
        <div className="d-flex flex-column text-center">{this.props.children}
      </div>
    </div>
  </div>
</div>
</div>
        )
    }
}

export default Modal