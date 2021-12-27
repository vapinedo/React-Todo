import React from 'react';
import { useForm } from '@core/hooks/useForm';

export const ModalWindow = ({ dispatch }) => {

    const [{ description }, onInputChange, reset] = useForm({ description: "" });

    const onSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) return;

        const task = {
            id: new Date().getTime(),
            description: description,
            done: false
        };

        dispatch({ type: "create", payload: task });
        reset();
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
                                onChange={ onInputChange }
                                className="form-control mt-3"
                                value={ description }
                                placeholder="Descripción de la tarea" />

                                <button type="submit" className="btn btn-primary mt-4">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
