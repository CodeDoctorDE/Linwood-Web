import React from 'react';
import { Typography, makeStyles, Link, Button } from '@material-ui/core';
import getConfig from 'next/config'

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { impress } = getConfig()

export interface Config {
    impress: string;
}
const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));
export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                Java discord bot with many features
        </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Developed by @CodeDoctorDE
        </Typography>
            <Copyright />
        </footer>
    );
}

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://codedoctor.tk/">
                CodeDoctor
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
            <br />
            <Button target="_blank" href={impress}>Impress</Button>

        </Typography>
    );
}