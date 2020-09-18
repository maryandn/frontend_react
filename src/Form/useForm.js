import { useState } from 'react';

export default function useForm() {

    const [form, setForm] = useState({
        login: "",
        password: "",
        confirmPassword: "",
        email: "",
        phone: "",
        emailValidate: false,
        spinnerStatus: false
    });

    const handleChangeForm = e => {
        const {id, value} = e.target
        setForm(prevState => ({
            ...prevState,
            [id]: value
        }))
    };

    const changeSpinnerStatus = (fields, value) => {
        setForm(prevState => ({
            ...prevState,
        [fields]: value
        }))
    }

    return { handleChangeForm, changeSpinnerStatus, form };
};
