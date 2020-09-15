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
    const [login, setLogin] = useState({
        login: "",
        password: ""
    })

    const [signup, setSignup] = useState({
        login: "",
        password: "",
        confirmPassword: "",
        email: "",
        phone: "",
        emailValidate: false
    })

    const handleChangeLogin = e => {
        const {id, value} = e.target
        setLogin(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleChangeSignup = e => {
        setSignup(prevSignup => {
            return {
                ...prevSignup,
                login: e.target.login,
            }
        })
    }

    const handleSubmitLogin = () => {

        const cors = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": login.login,
                "password": login.password
            })
        };
        fetch("http://127.0.0.1:8000/token/", cors)
            .then(response => response.json())
            .then(data => {
                if (data.access) {
                    localStorage.setItem("token", data.access)
                } else {
                    console.log(data)
                }
            })
            .catch(function (error) {
                console.log(error)
            });
        props.updateHandleClose(false)
    }

    const handleSubmitSignup = () => {
        console.log(signup)
        props.updateHandleClose(false)
    };

    const classes = useStyles();
    const type = props.type
    if (type === 'Войти') {
        return (
            <form className={classes.root} noValidate autoComplete="off">
                <p>{login.login ? '' : 'not'}</p>
                <TextField id="login"
                           label='Login'
                           variant="outlined"
                           required={true}
                           value={login.login}
                           onChange={handleChangeLogin}
                />
                <p>{login.password ? '' : 'not'}</p>
                <TextField id="password"
                           label='Password'
                           variant="outlined"
                           required={true}
                           value={login.password}
                           onChange={handleChangeLogin}
                />
                <Button variant="contained" color="primary" onClick={handleSubmitLogin}>
                    Войти
                </Button>
            </form>
        );
    } else {
        return (
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="signupLogin"
                           label='Login'
                           variant="outlined"
                           required={true}
                           value={signup.login}
                           onChange={handleChangeSignup}
                />
                <TextField id="signupPassword"
                           label='Password'
                           variant="outlined"
                           required={true}
                           value={signup.password}
                           onChange={handleChangeSignup}
                />
                <p>{ signup.password === signup.confirmPassword ? '' : 'пароли не совпадают'}</p>
                <TextField id="confirmPassword"
                           label='Confirm Password'
                           variant="outlined"
                           required={true}
                           value={signup.confirmPassword}
                           onChange={handleChangeSignup}
                />
                <TextField id="email"
                           label='Email'
                           variant="outlined"
                           required={true}
                           value={signup.email}
                           onChange={handleChangeSignup}
                />
                <TextField id="phone"
                           label='Phone'
                           variant="outlined"
                           required={true}
                           value={signup.phone}
                           onChange={handleChangeSignup}
                />
                <Button variant="contained" color="primary" onClick={handleSubmitSignup}>
                    Зарегестрироватся
                </Button>
            </form>
        );
    }

}
