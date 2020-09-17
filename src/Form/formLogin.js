import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import useForm from "../Form/useForm";
import action from "./action";
import { useAsync } from 'react-async';

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
    const { loadUsers } = action
    const classes = useStyles();

    const handleSubmitLogin = () => {
        action(form)
    }

    const { data, error, isLoading } = useAsync({ promiseFn: loadUsers })
    if (isLoading) return "Loading..."
    if (error) return "not"
    if (data) return data

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
            <Button variant="contained" color="primary" onClick={handleSubmitLogin}>
                Войти
            </Button>
        </form>
    )

}
