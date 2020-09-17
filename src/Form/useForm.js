import { useState } from 'react';

const useForm = () => {

    const [form, setForm] = useState({
        login: "",
        password: "",
        confirmPassword: "",
        email: "",
        phone: "",
        emailValidate: false,
    });

    const handleChangeForm = e => {
        const {id, value} = e.target
        setForm(prevState => ({
            ...prevState,
            [id]: value
        }))
    };

    return { handleChangeForm, form };
};

export default useForm;
