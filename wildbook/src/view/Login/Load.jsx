import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      display: "flex",
      flexDirection: "column",
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
  
    <Box class="cadre">
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Mail" />
      <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password"/>
      <Button id="click" variant="contained">Connexion</Button>
    </form>
    </Box>
  );
}