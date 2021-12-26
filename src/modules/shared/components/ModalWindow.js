import React from 'react';

export const ModalWindow = () => {
    return (
        <div className="modal fade" id="newTaskModal" aria-labelledby="newTaskModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="newTaskModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                    ...
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Save</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
