import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1, 0, 1, 0),
            width: `100%`,
        },
    },
}));

export default function BasicTextFields(props) {

    const [form, setForm] = useState({
        login: "",
        password: "",
        confirmPassword: "",
        email: "",
        phone: "",
        emailValidate: false,
        input: props.type

    })

    const handleChangeForm = e => {
        const {id, value} = e.target
        setForm(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSubmitForm = () => {

        const body = (
        if (form.input === 'Войти') {
            return JSON.stringify({})
        } else {
            return JSON.stringify({})
        }
        )



        const bodyLogin = {
            "username": form.login,
            "password": form.password,
            "input": form.input
        }

        const bodySignup = {
            "username": form.login,
            "password": form.password,
            "mail": form.email,
            "input": form.input,
            "profile": {
                "phone": form.phone
            }
        }

        const cors = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                function () {
                    if (form.input === 'Войти') {
                        console.log(bodyLogin)
                        return {bodyLogin}
                    } else {
                        console.log(bodySignup)
                        return {bodySignup}
                    }
                }
            )
        };
        console.log(cors.body)
        // fetch("http://127.0.0.1:8000/token/", cors)
        //     .then(response => response.json())
        //     .then(data => {
        //         if (data.access) {
        //             localStorage.setItem("token", data.access)
        //         } else {
        //             console.log(data)
        //         }
        //     })
        //     .catch(function (error) {
        //         console.log(error)
        //     });
        props.updateHandleClose(false)
    }

    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="login"
                       label='Login'
                       variant="outlined"
                       required={true}
                       value={form.login}
                       onChange={handleChangeForm}
            />
            <TextField id="password"
                       label='Password'
                       variant="outlined"
                       required={true}
                       value={form.password}
                       onChange={handleChangeForm}
            />
            {form.input === 'Войти' ? '' :
                <TextField id="confirmPassword"
                           label='Confirm Password'
                           variant="outlined"
                           required={true}
                           value={form.confirmPassword}
                           onChange={handleChangeForm}
                /> }
            {form.input === 'Войти' ? '' :
                <TextField id="email"
                           label='Email'
                           variant="outlined"
                           required={true}
                           value={form.email}
                           onChange={handleChangeForm}
                />}
            {form.input === 'Войти' ? '' :
                <TextField id="phone"
                           label='Phone'
                           variant="outlined"
                           required={true}
                           value={form.phone}
                           onChange={handleChangeForm}
                />}

            <Button variant="contained" color="primary" onClick={handleSubmitForm}>
                { form.input === 'Войти' ? 'Войти' : 'Зарегестрироватся' }
            </Button>
        </form>
    )

}
