import React, { ReactElement } from 'react'
import Head from 'next/head'
import { Typography, CircularProgress, makeStyles, Theme, createStyles, Paper } from '@material-ui/core'

interface Props {
    name: string
}
const CallbackPage = (props:Props): ReactElement => {
    const useStyles = makeStyles((theme) => ({
        screen: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        paper: {
            padding: theme.spacing(8, 12),
            margin: theme.spacing(2),
            textAlign: 'center'
        },
        text: {
            margin: theme.spacing(12, 2, 2)
        }
    }));
    const classes = useStyles();
    return (
        <React.Fragment>
        <Head>
            <title>Callback</title>
        </Head>
            <div className={classes.screen}>
                <Paper className={classes.paper}>
                    <CircularProgress />
                    <Typography className={classes.text}>Loading {props.name}...</Typography>
                </Paper>
            </div>
        </React.Fragment>
    )
}
CallbackPage.getInitialProps = async ({ query: {name} }) => {
  return { name: name }
}
CallbackPage.defaultProps = {
    name: "afe"
}

export default CallbackPage;