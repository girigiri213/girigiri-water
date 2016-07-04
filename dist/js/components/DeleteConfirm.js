import React from 'react'

const DeleteConfirm = ({ handleDelete, itemID, dashboard }) => (
  <div className="modal fade" id="deleteConfirm">
    <div className="modal-dialog modal-sm">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 className="modal-title">确认删除</h4>
        </div>
        <div className="modal-body">
          <p>是否删除该条记录？</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-success closeModal" data-dismiss="modal">Cancel</button>
          <button type="button" className="btn btn-danger" data-dismiss="modal"
            onClick={e => {
              handleDelete(dashboard, itemID)
            }}
          >
          Confirm
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default DeleteConfirm
