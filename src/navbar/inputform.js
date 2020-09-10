import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function BasicTextFields(props) {
    const classes = useStyles();
    const type = props.type
    if (type){
        return (
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label='Login' variant="outlined" />
                <TextField id="outlined-basic" label='Password' variant="outlined" />
            </form>
        );
    } else {
        return (
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label='Login' variant="outlined" />
                <TextField id="outlined-basic" label='Password' variant="outlined" />
                <TextField id="outlined-basic" label='Email' variant="outlined" />
            </form>
        );
    }

}
