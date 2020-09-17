import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import useForm from "../Form/useForm";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1, 0, 1, 0),
            width: `100%`,
        },
    },
}));

export default function TextFieldsSignup(props) {
    const {handleChangeForm, form} = useForm();

    const classes = useStyles();

    const handleSubmitSignup = () => {
        props.updateHandleClose()
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="login"
                       label='Login'
                       tabIndex="1"
                       autoFocus={true}
                       variant="outlined"
                       required={true}
                       value={form.login}
                       onChange={handleChangeForm}
            />
            <TextField id="password"
                       label='Password'
                       tabIndex="2"
                       variant="outlined"
                       required={true}
                       value={form.password}
                       onChange={handleChangeForm}
            />
            <TextField id="confirmPassword"
                       label='Confirm Password'
                       tabIndex="3"
                       variant="outlined"
                       required={true}
                       value={form.confirmPassword}
                       onChange={handleChangeForm}
            />
            <TextField id="email"
                       label='Email'
                       tabIndex="4"
                       variant="outlined"
                       required={true}
                       value={form.email}
                       onChange={handleChangeForm}
            />
            <TextField id="phone"
                       label='Phone'
                       tabIndex="5"
                       variant="outlined"
                       required={true}
                       value={form.phone}
                       onChange={handleChangeForm}
            />
            <Button variant="contained" color="primary" onClick={handleSubmitSignup}>
                Зарегестрироватся
            </Button>
        </form>
    )

}
