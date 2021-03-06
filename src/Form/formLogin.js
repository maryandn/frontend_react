import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import useForm from "./useForm";
import action from "./action";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1, 0, 1, 0),
            width: `100%`,
        },
    },
}));

export default function TextFieldsLogin(props) {

    const {handleChangeForm, form} = useForm();
    const classes = useStyles();

    async function handleSubmitLogin() {
        console.log('button')
        await action(form, props.updateHandleClose)

    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="login"
                       label='Login'
                       autoFocus={true}
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
            { form.spinnerStatus && <p>Loading....</p> }
            <Button variant="contained" color="primary" onClick={handleSubmitLogin}>
                Войти
            </Button>
        </form>
    )

}
