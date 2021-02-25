import {useState} from 'react';

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const handleChange = ({target}) => {
        setValues({
            [target.name] : target.value,
        });
    }

    const reset = () => {
        setValues({});
    }

    return [values, handleChange, reset];
}