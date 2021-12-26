import { useState } from "react";

export const useForm = (initialState = {}) => {

    const [state, setState] = useState(initialState);

    const reset = () => {
        setState(initialState);
    };

    const onInputChange = ({ target }) => {
        setState({
            ...state,
            [target.name]: target.value
        });
    };
    
    return [state, onInputChange, reset];
}
