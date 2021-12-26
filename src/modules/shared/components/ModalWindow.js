import React from 'react';

export const ModalWindow = ({ dispatch }) => {

    const onSubmit = (e) => {
        e.preventDefault();

        const task = {
            id: new Date().getTime(),
            description: "New task",
            done: false
        };
        const action = { type: "add", payload: task };
        dispatch(action);
    };
    
    return (
        <div className="modal fade" id="newTaskModal" aria-labelledby="newTaskModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="newTaskModalLabel">New Task</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        <form onSubmit={ onSubmit } autoComplete="off">
                            <input 
                                type="text" 
                                name="description" 
                                className="form-control mt-3"
                                placeholder="Descripción de la tarea" />

                                <button type="submit" className="btn btn-primary mt-4">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
