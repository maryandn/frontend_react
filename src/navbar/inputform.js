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

    const handleChange = e => {
        const {id, value} = e.target
        setLogin(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(login);
        setLogin(prevState => ({
            ...prevState,
            login: "",
            password: ""
        }))

        const cors = {
            crossDomain: true,
            method: 'POST',
            headers: {
                credentials: "include"
            },
            body: JSON.stringify({
                "username": login.login,
                "password": login.password
            })
        };
        fetch("http://127.0.0.1:8000/token/", cors)
            .then(response => response.json())
            .then(data => console.log(data));
    }
    const classes = useStyles();
    const type = props.type
    if (type === 'Войти') {
        return (
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="login"
                           label='Login'
                           variant="outlined"
                           value={login.login}
                           onChange={handleChange}
                />
                <TextField id="password"
                           label='Password'
                           variant="outlined"
                           value={login.password}
                           onChange={handleChange}
                />
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Войти
                </Button>
            </form>
        );
    } else {
        return (
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label='Login' variant="outlined"/>
                <TextField id="outlined-basic" label='Password' variant="outlined"/>
                <TextField id="outlined-basic" label='Confirm Password' variant="outlined"/>
                <TextField id="outlined-basic" label='Email' variant="outlined"/>
                <TextField id="outlined-basic" label='Phone' variant="outlined"/>
                <Button variant="contained" color="primary">
                    Зарегестрироватся
                </Button>
            </form>
        );
    }

}
