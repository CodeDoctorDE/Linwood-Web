import React from 'react'
import { Grid, Typography, LinearProgress, makeStyles, createStyles, useTheme } from '../pages/cp/user/node_modules/@material-ui/core'

interface Props {
    xp: number,
    name: string,
    constant: number
}
const Karma = (props: Props) => {
    const theme = useTheme();
    const useStyles = makeStyles(() =>
        createStyles({
            karma: {
                padding: theme.spacing(2)
            },
            title: {
                flex: '1 1 100%',
                padding: theme.spacing(1),
            }
        })
    );
    const classes = useStyles();
    const level = Math.floor(props.constant * Math.sqrt(props.xp));
    const remaining = props.constant * Math.sqrt(props.xp) - level;
    return (
        <React.Fragment>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={11}>
                        <Typography variant="h6" className={classes.title}>
                            {props.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Typography variant="h6">
                            #1
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={3} className={classes.karma}>
                <Grid item xs={1}>
                    {level}
                </Grid>
                <Grid item xs={10}>
                    <LinearProgress variant="determinate" value={remaining * 100} />
                </Grid>
                <Grid item xs={1}>
                    {Math.round(remaining * 100)}%
      </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Karma
