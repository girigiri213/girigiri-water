import React from 'react'

const FormDeviceView = () => (
  <div className="modal fade" id="deviceForm" tabIndex="-1" role="dialog" aria-labelledby="deviceFormLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 className="modal-title" id="myModalLabel">Title</h4>
        </div>
        <form>
        <div className="modal-body">
          // TODO: Form detail...
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

export default FormDeviceView
